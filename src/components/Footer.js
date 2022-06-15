import React from "react";
import './../css/footer.css'

function Footer() {
    return(
        <div className="footer-contener">
            <div className="firt-floor">
                ไทย
            </div>
            <div className="two-floor">
                <div className="text-left">
                   <a className="colortext cursor">เกี่ยวกับ</a> 
                   <a className="colortext cursor">โฆษณา</a>
                   <a className="colortext cursor">ธุรกิจ</a>
                   <a className="colortext cursor">วิธีการทำงานของSearch</a>
                </div>
                <div className="text-right">
                   <a className="colortext cursor">ความเป็นส่วนตัว</a>
                   <a className="colortext cursor">ข้อกำหนด</a>
                   <a className="colortext cursor">การตั้งค่า</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;