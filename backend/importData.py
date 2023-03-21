import pandas as pd

df_list = []
df = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv')
df2 = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv')
df3 = pd.read_csv('https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv')

df_list.append(df)
df_list.append(df2)
df_list.append(df3)

combined_df = pd.concat(df_list, ignore_index=True)

combined_df.rename(columns={
    "Departure": "departureTime", 
    "Return": "returnTime", 
    "Departure station id": "departureStationId",
    "Departure station name": "departureStationName",
    "Return station id": "returnStationId",
    "Return station name": "returnStationName",
    "Covered distance (m)": "coveredDistance",
    "Duration (sec.)": "duration"}, inplace=True)

mask = (combined_df['coveredDistance'] >= 10) & (combined_df["duration"] >= 10)

filtered_df = combined_df[mask]

filtered_df['coveredDistance'] = filtered_df["coveredDistance"].apply(lambda x: x/1000)
filtered_df['duration'] = filtered_df["duration"].apply(lambda x: x/60)

print(filtered_df)