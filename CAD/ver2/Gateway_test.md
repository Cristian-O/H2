Tested
- [x] Battery charge (LiFePO4)
- [x] Buck-boost (TPS63000 replaced with TPS63001-3.3V version)
- [x] ESP32-C3
- [x] NFC
- [x] LoRa
- [x] OLED(SSD1306, 128x32)

Working/(Needs improvement)
- [x] Battery charge (LiFePO4, charging is working :MPPT is set to 6V for the used solar pannel)
      ![IMG_20240120_123548](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/2a1bf97e-297a-4244-b116-eee2c9cd15e9)
      ![Current vs Time (end of charge; LiFePO4 cell voltage = 3 4V)](https://github.com/Cristian-O/H2/assets/108984738/ce14e5e9-ca38-4a74-a35d-4b095b8d5b86)
      ![IMG_20240331_120825](https://github.com/Cristian-O/H2/assets/108984738/6c809dae-8da0-4d33-9546-277f25a0f187)

      Fully functional charging the cell from 3.3v to 3.4V (~300mA capacity); Vin=6V, MPPT=6V, Max current=350mA). Reverse battery tested (Q2 was smoking, no components were harmed, Q2 will act as fuse during reverse-battery -one body diode of the internal MOS transistor will burn). Fully tested during the start of April
- [x] Buck-boost (TPS63001)(tested on VBUS-5V and VBAT-3.2V)
- [x] ESP32-C3 (boot configuration causes problems- GPIO2,9 and 8 should be configured for flashing-pull up and capacitor on GPIO9(RC for timing), WiFi is Working, reset, USB-CDC flash and debug + serial=> solved by correct button connection and 470nF + 5.1k resistors for the ENABLE and BOOT timing during startup)
      ![PICT0013](https://github.com/Cristian-O/H2/assets/108984738/92f30523-c372-483e-b849-fa86c3f2789f)
      ![chip_id_esp32](https://github.com/Cristian-O/H2/assets/108984738/472c3584-0447-4511-9679-668c3f78736f)
      ![wifi_test_esp32_c3_1](https://github.com/Cristian-O/H2/assets/108984738/399c255c-60f5-44bc-a497-0b5c16c6b8e8)

- [x] NFC (Antenna is working. Detected by ST25DV android app at ~2 to 4cm distance, I2C tested-1,2,3,4 wrote from phone read by ESP32, 0,0,0,0 read by phone after write from ESP32; UID read by esp32)
     ![Screenshot_20240119_225934_com st st25nfc](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/a7974b05-da86-4b15-9883-ab2d21142aeb)
     ![st25dv04k_UID](https://github.com/Cristian-O/H2/assets/108984738/4183b22c-28a0-40dd-b887-510375fec0fa)
     ![st25dv04k_read0x0_1234](https://github.com/Cristian-O/H2/assets/108984738/fe86804e-591a-4867-a549-075bfd76f66a)

- [x] LoRa (Regs could be read, data can be read and stored in RECEIVE_BUFFER, RSSI is read, tested at SF7, power of 10dB, ~800 packets read without errors)
       ![LoRa_1](https://github.com/Cristian-O/H2/assets/108984738/7cfc2c03-e433-4c95-8434-a25b337adea1)
       ![LoRa_2](https://github.com/Cristian-O/H2/assets/108984738/be5f0d1c-970e-455c-8ed1-829dec24d64d)
       ![Screenshot 2024-04-07 130546](https://github.com/Cristian-O/H2/assets/108984738/c43f87e9-0525-46b7-a7bd-e2a37862643f)

- [x] OLED (SSD1306,128x32) tested with Adafruit_SSD1306 and U8g2 libraries (Meditation error when LoRa and OLED are used, I2C scan is working, devices are detected on I2C)
      ![IMG_20240331_112410](https://github.com/Cristian-O/H2/assets/108984738/ab065294-febe-4ccd-a453-e4b81cf49ea9)

To Do(Software)
- [ ] FireBase and Thingspeak write + WiFi connection
- [ ] OLED working as well as LoRa (mainly for range testing)
- [ ] ST25DV take SSID and PASSWORD for the AP (read during void.setup())
- [ ] Sleep during no data reception (ex: 25 min sleep 5 min wakeup)
- [ ] Block/Flow diagram for the software part (CLOUD integration, Sleep/LoRa/ST25)
To Do(Hardware)
- [ ] 18650 Holder/wall mount/antenna holder
- [ ] Field Testing (Battery Life, Range)
