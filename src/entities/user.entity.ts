import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { ObjectType, Field, HideField } from "@nestjs/graphql";

@ObjectType()
@Entity({ name: "cmuser", comment: "관리자" })
export class Cmuser {
  @Field()
  @PrimaryColumn({ type: "varchar", length: 9, comment: "관리자 ID" })
  user_id: string;

  @Field()
  @Column({ type: "varchar", length: 20, comment: "관리자명" })
  user_name: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", length: 20, nullable: true, comment: "관리자닉네임" })
  user_nicname?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 10, nullable: true, comment: "사번" })
  worker_id?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 20, nullable: true, comment: "로그인 아이디" })
  login_id?: string;

  @HideField()
  @Exclude()
  @Column({ type: "varchar", length: 100, nullable: true, comment: "간편 비밀번호" })
  password?: string;

  @HideField()
  @Exclude()
  @Column({ type: "varchar", length: 300, nullable: true, comment: "로그인 비밀번호" })
  password_hash?: string;

  @HideField()
  // @Exclude()
  @Column({ type: "varchar", length: 300, nullable: true, comment: "비밀번호 Salt" })
  password_salt?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 100, nullable: true, comment: "이메일" })
  email?: string;

  //@Field({ nullable: true })
  @Column({ type: "date", nullable: true, comment: "생년월일" })
  birthday?: Date;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 15, nullable: true, comment: "일반전화번호" })
  tel?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 15, nullable: true, comment: "전화번호" })
  mobile_tel?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 50, nullable: true, comment: "주소" })
  address?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 500, nullable: true, comment: "프로파일이미지" })
  profile_img?: string;

  //@Field({ nullable: true })
  @Column({ type: "date", nullable: true, comment: "입사일자" })
  enter_date?: Date;

  //@Field({ nullable: true })
  @Column({ type: "date", nullable: true, comment: "정규직전환일자" })
  full_date?: Date;

  //@Field({ nullable: true })
  @Column({ type: "date", nullable: true, comment: "퇴사일자" })
  entire_date?: Date;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0002]구성원구분" })
  user_gb_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 6, nullable: true, comment: "소속거래처ID" })
  vendor_id?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 6, nullable: true, comment: "권한번호" })
  role_id?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0003]부서" })
  depart_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0004]직책" })
  position_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0006]직무" })
  duty_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0005]재직상태" })
  status_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 2, nullable: true, comment: "[0041] 관리자 레벨" })
  cmuser_level_code?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 1, default: "Y", comment: "업무일지 사용여부" })
  work_log_yn?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 100, nullable: true, comment: "노션계정id" })
  notion_account_uuid?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 100, nullable: true, comment: "노션직원id" })
  notion_worker_uuid?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 100, nullable: true, comment: "노션key" })
  notion_key?: string;

  //@Field({ nullable: true })
  @Column({ type: "varchar", length: 500, nullable: true, comment: "메모" })
  memo?: string;

  //@Field()
  @Column({ type: "varchar", length: 9, comment: "등록자" })
  register_id: string;

  //@Field()
  @Column({ type: "varchar", length: 9, comment: "수정자" })
  update_id: string;

  //@Field()
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", nullable: false, comment: "등록일시" })
  register_date: Date;

  //@Field()
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", nullable: false, comment: "수정일시" })
  update_date: Date;
}
