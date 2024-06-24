import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, BeforeUpdate} from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable: false})
    name!: string

    @Column({unique: true,nullable: false})
    email!: string

    @Column({ nullable: false})
    password!: string

    @Column({nullable: false})
    phone!: string

    @Column({nullable: false})
    address!: string

    @Column({nullable: false})
    country!: string

    @Column({nullable: false})
    city!: string

    @Column({nullable: false})
    zipCode!: string

    @BeforeInsert()
    async processPassword(){
        this.password = await bcrypt.hash(this.password,10)
    }

    async isValidPassword(password: string){
        return await bcrypt.compare(password, this.password);
    }


}