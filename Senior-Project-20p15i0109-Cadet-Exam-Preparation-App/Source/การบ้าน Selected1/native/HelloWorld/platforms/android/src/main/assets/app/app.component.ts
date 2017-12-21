import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="N I N E A R C H" class="action-bar"></ActionBar>

    <StackLayout>
    <Image src="~/images/picture.jpg"></Image>
      <TextField hint="ชื่อผู้ใช้หรืออีเมลล์" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="รหัสผ่าน" secure="true"></TextField>

      <Button class="submit-btn" text="เข้าสู่ระบบ"></Button>
      <Button class="submit-btn" text="ลงทะเบียน"></Button>
    </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
