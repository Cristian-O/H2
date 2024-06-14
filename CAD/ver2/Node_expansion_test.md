Tested
- [x] Supercapacitor charging and management (ADP5091)
- [x] STM32L431 
- [x] Lora (SX1280)
      
- [x] ENS210 (Temp+Humidity)
- [x] LTR-390-UV (Light intensity & UV)(tested in both UVS and ALS, precise, fast)
- [x] DS18-B20 (Surface temperature)(working, not very precise at 2.9V but variation of temperature is working)
- [x] Analog PH (PH of water)
      
Working/(Needs improvement)
- [X] Supercapacitor charging and management (ADP5091):

![image](https://github.com/Cristian-O/H2/assets/108984738/be896491-3708-4059-9036-6468f9c8566e)
![image](https://github.com/Cristian-O/H2/assets/108984738/402b6366-94e0-48f5-8fec-9134cf6d7b21)

      Charging to 3.89V and discharge to 2.24V, reg_out (set to 3V, 3.05V real value), charging over 0.5V on VIN
      Charging at down to 0.5V tested and working, hard to make note of as charging is very slow.
      Reg_Out will give 3V only in LDO mode (buck and LDO work only for Supercap. charging)
      Reg_Out voltge is controlled only by VID resistor (should give 2.5V when it is not populated) -Reg_out is working properly
      REG_D1 and REG_D2 controls mode of operation (now is connected with either PGOOD or GND -for LDO or VIN Hybrid Mode, JUMPER for VDD should be connected)
      Hybrid mode make the use of direct supply from Vin to LDO (Supercapacitor voltage will decrease slowly, prolonging it's life), charging is slower(more inefficient as suggested by the datasheet and forum posts)
      
      IMPROVEMENTS> VDD=REG_OUT (3V) not VSYS(2.2 to 3.8V), TEST point for SUPERCAPCAP voltage measurement and VSYS(can be used for safe discharge of the supercapacitor)
      LLD is not very usefull(MINOP comparator is not working as intended)
      Fully charged in 1.5h with solar pannel at 0.95V (from 2.5V to 3.89V). Backup Tested (CR2032-3.32V fully charged at VSYS output when SCAP is disconnected)
      Fully tested and functional!!!
- [x] STM32L431(working)
      Fully tested and functional!!!
- [x] Lora(registers were read, ~200 packets sent without errors during a single full charge of the supercapacitor)
      ![regs_read_node_lora](https://github.com/Cristian-O/H2/assets/108984738/12de713b-12a3-42ad-9aa8-aee5fbd2b515)
      ![image](https://github.com/Cristian-O/H2/assets/108984738/f1db5ae5-239e-4160-a3e6-b8a0d1263c3e)

      Fully tested and functional!!!

>Sensors
- [x] ENS210 (Temp+Humidity)(both working, tested in ArduinoIDE using STM32Duino and Wire, SoftwareSerial for UART2 transmission)
- [x] LTR-390-UV (Light intensity & UV)(tested in both UVS and ALS, precise, fast-up to 20bits of resolution -could be used to determine weather or not energi is produced from solar)
- [x] DS18-B20 (Surface temperature)(working, not very precise at 2.9V but variation of temperature is working)
- [x] Analog PH (PH of water)(variation of ph is noticeable, high current consumption-20mA because of the voltage reference, might not be very usefull)
- [x] HALL sensor (for readout of a mechanical trigger/ level)

Parameters> TEMP+HUMID,UV/ALS,TEMP_P,HALL,VBAT,LLD?

To Do(Software)
- [x] Multiple Wire interfaces (At least two> I2C1 and ISC2)
- [x] Multiple sensor read
- [x] Packet for LoRa transmission (with all sensor values)
- [x] Sleep implementation(less than 1uA in sleep)
- [x] Block/flow diagram of the code(working...)
- [x] Field testing (working time, power consumption)-one day tested on both=> working (less than 1uA in sleep=> should be ~800nA and less than 20mA on data sending
- [x] Range testing (distance) >600m with SF7 tested(line of sight)
