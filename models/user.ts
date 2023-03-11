export class User {
  @PrimaryGeneratedColumn("uuid")
  user_uuid: string
  username: string
}