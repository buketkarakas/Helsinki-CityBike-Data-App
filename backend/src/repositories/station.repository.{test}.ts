/* import * as StationRepository from "./station.repository"
const { createConnection, getRepository, PrimaryGeneratedColumn } = require('typeorm')
import {AppDataSource} from "../index";
import { generateStationsData } from "../../test/utils/generate";


jest.mock('typeorm', () => ({
    createConnection: jest.fn(),
    getRepository: jest.fn(),
    PrimaryGeneratedColumn: () => {}
}));



 jest.mock("typeorm", () => {
    return {
        getRepository: jest.fn().mockReturnValue({
            find: jest.fn(),
            findOne: jest.fn()
        }),
        PrimaryGeneratedColumn: jest.fn(),
        PrimaryColumn: jest.fn(),
        Column: jest.fn(),
        Entity: jest.fn()
}; 
}) 

 const mockedGetRepo = jest.mocked(AppDataSource.getRepository(<jest.Mock>{}));
beforeEach(() => {
    mockedGetRepo.find.mockClear();
    mockedGetRepo.findOne.mockClear();
}) 

describe("StationRepository", () => {
    let repository: jest.Mocked<any>;
    let station;
    beforeAll(() => {
        createConnection.mockReturnValue(
            Promise.resolve({
                getRepository: jest.fn(() => repository)
            })
        )
    });

    const mockRepository = {
        find: jest.fn(),
        findOne: jest.fn()
    }

    repository = jest.fn(() => mockRepository)
    jest.spyOn(mockRepository, 'find')
    jest.spyOn(mockRepository, 'findOne')


    describe("getStations", () => {
        test("should return empty array ", async () => {
            repository.find.mockResolvedValue([]);
            const stations = await StationRepository.getStations(1, 50);
            expect(stations).toEqual([]);
            expect(repository.find).toHaveBeenCalledWith();
            expect(repository.find).toHaveBeenCalledTimes(1);
        });

        test("should return station list", async () => {
            const stationsData = generateStationsData(2);
            repository.find.mockResolvedValue(stationsData);
            const stations = await StationRepository.getStations(1, 50);
            expect(stations).toEqual(stationsData);
            expect(repository.find).toHaveBeenCalledWith();
            expect(repository.find).toHaveBeenCalledTimes(1);
        })
    })
}) */