Tested
- [x] Battery charge (LiFePO4)
- [x] Buck-boost (TPS63000 should be replaced with TPS63001-3.3V version)
- [ ] ESP32-C3
- [x] NFC
- [ ] LoRa
- [ ] SD Card

Working
- [x] Battery charge (LiFePO4, charging is working :MPPT is set to 12V , will be 6V for the used solar pannel)
      ![IMG_20240120_140053](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/e02561f6-f4db-4a95-baf5-df797e891361)
      ![IMG_20240120_123548](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/2a1bf97e-297a-4244-b116-eee2c9cd15e9)
      ![IMG_20240120_140120](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/3dfe7d96-66c8-4910-95a7-cbae71f445de)
      ![Current vs Time (end of charge; LiFePO4 cell voltage = 3 4V)](https://github.com/Cristian-O/H2/assets/108984738/ce14e5e9-ca38-4a74-a35d-4b095b8d5b86)
      
      Fully functional charging the cell from 3.3v to 3.4V (~300mA capacity); Vin=13V, MPPT=12V, Max current=200mA). Reverse battery tested (Q2 was smoking, no components were harmed, Q2 will act as fuse during reverse-battery -one body diode of the internal MOS transistor will burn)
- [ ] Buck-boost (no Feedback divider, PCB cut+resistors or TPS63001)
- [ ] ESP32-C3 
- [x] NFC (Antenna is working, Detected by ST25DV android app at ~2cm distance, I2C not tested)
      
     ![Screenshot_20240119_225934_com st st25nfc](https://github.com/Cristian-O/2.4GHz-LoRa-Gateway-and-Node/assets/108984738/a7974b05-da86-4b15-9883-ab2d21142aeb)

- [ ] LoRa
- [ ] SD Card
