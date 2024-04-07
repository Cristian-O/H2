Tested
- [x] Battery charge (LiFePO4)
- [x] Buck-boost (TPS63000 should be replaced with TPS63001-3.3V version)
- [x] ESP32-C3
- [x] NFC
- [x] LoRa
- [x] OLED(SSD1306, 128x32)

Working/(Needs improvement)
- [x] Battery charge (LiFePO4, charging is working :MPPT is set to 6V for the used solar pannel)
      ![IMG_20240120_140053](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/e02561f6-f4db-4a95-baf5-df797e891361)
      ![IMG_20240120_123548](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/2a1bf97e-297a-4244-b116-eee2c9cd15e9)
      ![IMG_20240120_140120](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/3dfe7d96-66c8-4910-95a7-cbae71f445de)
      ![Current vs Time (end of charge; LiFePO4 cell voltage = 3 4V)](https://github.com/Cristian-O/H2/assets/108984738/ce14e5e9-ca38-4a74-a35d-4b095b8d5b86)
      ![image](https://github.com/Cristian-O/H2/assets/108984738/2de9f9b0-00da-4020-8472-1a46dfa877cc)

      
      Fully functional charging the cell from 3.3v to 3.4V (~300mA capacity); Vin=6V, MPPT=6V, Max current=350mA). Reverse battery tested (Q2 was smoking, no components were harmed, Q2 will act as fuse during reverse-battery -one body diode of the internal MOS transistor will burn)
- [x] Buck-boost (TPS63001)(tested on VBUS-5V and VBAT-3.2V)
- [x] ESP32-C3 (boot configuration causes problems- GPIO2,9 and 8 should be configured for flashing-pull up and capacitor on GPIO9(RC for timing), WiFi is Working, reset, USB-CDC flash and debug + serial)
      ![PICT0013](https://github.com/Cristian-O/H2/assets/108984738/92f30523-c372-483e-b849-fa86c3f2789f)
      ![chip_id_esp32](https://github.com/Cristian-O/H2/assets/108984738/472c3584-0447-4511-9679-668c3f78736f)
      ![wifi_test_esp32_c3_1](https://github.com/Cristian-O/H2/assets/108984738/399c255c-60f5-44bc-a497-0b5c16c6b8e8)

- [x] NFC (Antenna is working. Detected by ST25DV android app at ~2 to 4cm distance, I2C tested-1,2,3,4 wrote from phone read by ESP32, 0,0,0,0 read by phone after write from ESP32; UID read by esp32)
      
     ![Screenshot_20240119_225934_com st st25nfc](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/a7974b05-da86-4b15-9883-ab2d21142aeb)
     ![st25dv04k_UID](https://github.com/Cristian-O/H2/assets/108984738/4183b22c-28a0-40dd-b887-510375fec0fa)
     ![st25dv04k_read0x0_1234](https://github.com/Cristian-O/H2/assets/108984738/fe86804e-591a-4867-a549-075bfd76f66a)

- [ ] LoRa (BUSY,RST and DIO1 are not connected => LoRa could not be used as busy is used to determine when to send next commands, DIO1 is used for signaling packet transmision)
- [ ] SD Card (not usefull, NFC memory is easier to operate); will be replaced with OLED display in rev2 (good for debugging and not only)

