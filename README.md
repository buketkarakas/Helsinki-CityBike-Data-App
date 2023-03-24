# solita-devacademy-2023-solution

## To-Do List

### Data Import

- [x] Import data from the CSV files to local Postgres database
- [x] Validate data before importing
- [x] Don't import journeys that lasted for less than 10 sec.
- [x] Don't import journeys that covered distance shorter than 10 meters

### Journey List View

- [x] List journeys with pagination
- [x] For each journey show: departure and return stations, covered distance in kilometers and duration in minutes
- [ ] Ordering per column (extra)
- [ ] Searching (extra)
- [ ] Filtering (extra)

### Station List 

- [x] List all the stations with pagination
- [ ] Searching (extra)

### Single Station View

- [ ] Show: station name, station address, total number of journeys starting from the station, total number of journeys ending at the station
- [ ] Station location on map (extra)
- [ ] Avg distance starting from and  ending at the station (extra)
- [ ] Top 5 most popular stations for journeys starting from and ending at the station (extra)
- [ ] Ability to filter all the calc. per month (extra)
