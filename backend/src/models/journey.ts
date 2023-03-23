import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Station } from "./station";


@Entity()
export class Journey {
    @PrimaryGeneratedColumn()
        id!: number;

    @Column({type: "timestamptz"})
        departuretime!: Date;

    @Column({type: "timestamptz"})
        returntime!: Date;

    @Column()
        departurestationid!: number;
   // @ManyToOne((_type) => Station, (station: Station) => station.stationid)


    @Column()
        returnstationid!: number;
    //@ManyToOne((_type) => Station, (station: Station) => station.stationid)


    @Column()
        departurestationname!: string;

    @Column()
        returnstationname!: string;

    @Column({type: "decimal", precision: 5, scale: 2, default:0})
        covereddistance!: number;

    @Column({type: "decimal", precision: 5, scale: 2, default:0})
        duration!: number;

}