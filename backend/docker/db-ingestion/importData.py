import pandas as pd
import psycopg2
from psycopg2 import sql
import psycopg2.extras




df_list = []
df = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv')
df2 = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv')
df3 = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv')
df_st= pd.read_csv("https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv")

df_list.append(df2)
df_list.append(df3)

combined_df = pd.concat(df_list, ignore_index=True)

combined_df.reset_index(inplace=True)

combined_df.rename(columns={
    "index": "id",
    "Departure": "departuretime", 
    "Return": "returntime", 
    "Departure station id": "departurestationid",
    "Departure station name": "departurestationname",
    "Return station id": "returnstationid",
    "Return station name": "returnstationname",
    "Covered distance (m)": "covereddistance",
    "Duration (sec.)": "duration"}, inplace=True)


df_st.rename(columns={
        "ID": "stationid",
        "Nimi": "finnishname",
        "Namn": "swedishname",
        "Name": "englishname",
        "Osoite": "finnishaddress",
        "Adress": "swedishaddress",
        "Kaupunki": "finnishcity",
        "Stad": "swedishcity",
        "Operaattor": "operator",
        "Kapasiteet": "capacity",
        "x": "xcoord",
        "y": "ycoord"
    }, inplace= True
)


mask = (combined_df['covereddistance'] >= 10) & (combined_df["duration"] >= 10) 

filtered_df = combined_df[mask]


filtered_df['covereddistance'] = filtered_df["covereddistance"].apply(lambda x: x/1000)
filtered_df['duration'] = filtered_df["duration"].apply(lambda x: x/60)


conn = psycopg2.connect(
    host="localhost",
    database="solitaacademy",
    user="postgres",
    password="postgres"
)

cursor = conn.cursor()

# create the insert statement
insert_query = 'INSERT INTO journey (id, departuretime, returntime, departurestationid, departurestationname, returnstationid, returnstationname, covereddistance, duration) \
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)'

insert_query_station = 'INSERT INTO station (stationid, finnishname, swedishname, englishname, finnishaddress, swedishaddress, finnishcity, swedishcity, operator, capacity, xcoord, ycoord) \
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'

# create a list of tuples containing the values to insert
data = [(val1, val2, val3, val4, val5, val6, val7, val8, val9) 
        for val1, val2, val3, val4, val5, val6, val7, val8, val9 
        in zip(filtered_df['id'], filtered_df['departuretime'], filtered_df['returntime'],filtered_df['departurestationid'], filtered_df['departurestationname'], filtered_df['returnstationid'], filtered_df['returnstationname'], filtered_df['covereddistance'], filtered_df['duration'])]

station_data = [(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) 
        for val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12
        in zip(df_st['stationid'], df_st['finnishname'], df_st['swedishname'],df_st['englishname'], df_st['finnishaddress'], df_st['swedishaddress'], 
               df_st['finnishcity'], df_st['swedishcity'], df_st['operator'], df_st['capacity'], df_st['xcoord'], df_st['ycoord'])]

psycopg2.extras.execute_batch(cursor,insert_query,data)

psycopg2.extras.execute_batch(cursor, insert_query_station, station_data)

conn.commit()

cursor.close()
conn.close()    

