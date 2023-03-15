import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Station{
    @PrimaryColumn()
    stationId!: number;

    @Column()
    finnishName!: string;

    @Column()
    swedishName!: string;

    @Column()
    englishName!: string;

    @Column()
    finnishAddress!: string;

    @Column()
    swedishAddress!: string;

    @Column()
    finnishCity!: string;

    @Column()
    swedishCity!: string;

    @Column()
    operator!: string;

    @Column()
    capacity!: string;

    @Column({type: "decimal", precision: 10, scale: 8, default:0})
    xCoord!: number


    @Column({type: "decimal", precision: 10, scale: 8, default:0})
    yCoord!: number
}