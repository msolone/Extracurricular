using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class AddedAttendance2Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attendance_Players_PlayerId",
                table: "Attendance");

            migrationBuilder.DropColumn(
                name: "Player_Id",
                table: "Attendance");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "Attendance",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Attendance_Players_PlayerId",
                table: "Attendance",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attendance_Players_PlayerId",
                table: "Attendance");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "Attendance",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "Player_Id",
                table: "Attendance",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Attendance_Players_PlayerId",
                table: "Attendance",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
