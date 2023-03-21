import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Station{
    @PrimaryColumn()
        stationid!: number;

    @Column()
        finnishname!: string;

    @Column()
        swedishName!: string;

    @Column()
        englishname!: string;

    @Column()
        finnishaddress!: string;

    @Column()
        swedishaddress!: string;

    @Column()
        finnishcity!: string;

    @Column()
        swedishcity!: string;

    @Column()
        operator!: string;

    @Column()
        capacity!: string;

    @Column({type: "decimal", precision: 10, scale: 8, default:0})
        xcoord!: number;


    @Column({type: "decimal", precision: 10, scale: 8, default:0})
        ycoord!: number;
}