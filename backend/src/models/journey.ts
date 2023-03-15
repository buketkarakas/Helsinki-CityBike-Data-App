import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Station } from "./station";


@Entity()
export class Journey {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "timestamptz"})
    departureTime!: Date;

    @Column({type: "timestamptz"})
    returnTime!: Date;

    @Column()
    departureStationId!: number;
    @ManyToOne((_type) => Station, (station: Station) => station.stationId)


    @Column()
    returnStationId!: number;
    @ManyToOne((_type) => Station, (station: Station) => station.stationId)


    @Column()
    departureStationName!: string;

    @Column()
    returnStationName!: string;

    @Column()
    coveredDistance!: number;

    @Column()
    duration!: number;

}