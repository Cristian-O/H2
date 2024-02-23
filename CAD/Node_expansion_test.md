Tested
- [x] Supercapacitor charging and management (ADP5091)
- [x] STM32L431 
- [ ] Lora (SX1280)
      
>Sensors (EXP headers are ordered wrong EXP3 has EXP1 pins)
- [x] ENS210 (Temp+Humidity)
- [x] LTR-390-UV (Light intensity & UV)(tested in both UVS and ALS, precise, fast)
- [x] DS18-B20 (Surface temperature)(working, not very precise at 2.9V but variation of temperature is working)
- [ ] Analog PH (PH of water)
      
Working/(Needs improvement)
- [X] Supercapacitor charging and management (ADP5091):

![image](https://github.com/Cristian-O/H2/assets/108984738/be896491-3708-4059-9036-6468f9c8566e)
![image](https://github.com/Cristian-O/H2/assets/108984738/402b6366-94e0-48f5-8fec-9134cf6d7b21)

      Charging to 3.86V and discharge to 2.24V, no reg_out (unstable, <2V, set to 3V), charging over 3V on VIN
      Charging at down to 0.5V tested (working only when CBP capacitor is touched (this can be due to high ESR of CBP capacitor or that it is not soldered properly) => resoldered then replaced with another => same behavior => CBP should be reordered with lower ESR or PCB redesign without nearby copper pour (for testing 100pF in paralel with 10nF capacitor to emulate HBM-Human Body Model) => To be tested
      Supercapacitor can be charged under 2.2V but it will be slower charging
      Reg_Out will give 3V only in LDO mode (buck and LDO work only for Supercap. charging)
      Reg_Out voltge is controlled only by VID resistor (should give 2.5V when it is not populated) -Reg_out is not working
      Solutions> working with the sys voltage (2.2 to 3.3V range instead of 3.8V max). It should work pretty well (there will be ~5 days lost for a 10F capacitor-it should be 14 days capable) -Aborted(~20% capacity loss)
      Solved=> REG_OUT FB not soldered properly, after conection REG_OUT supplies 3V at V_SUPERCAP> 3V
      REG_D1 and REG_D2 controls mode of operation (now is connected with either VSYS or GND -for LDO or VIN Hybrid Mode, JUMPER for VDD should be connected)
      VDD can be connected to VSYS with VDD jumper(REG_OUT should be connected instead from capacitor to maintain max 3V at VDD)
      WORKING!!!! MINOP pin was not soldered properly (BOOST converter wasn't switching because the threshold was higher than input - that's why it worked at 3V not at 0.5V)
      
      IMPROVEMENTS> VDD=REG_OUT (3V) not VSYS(2.2 to 3.8V), TEST point for SUPERCAPCAP voltage measurement and VSYS(can be used for safe discharge of the supercapacitor)
      PGOOD and LLD are not very usefull, more usefull will be the measurement o SCAP voltage (simple N+P channel MOS with 1M resistance at gate +1/2 divider (two 1M resistors)=>4 resistors of 1M (good tolerance will be beneficial), and             DMC2400UV as used in Nordic Thingy:52-command from microcontroller to open
![PICT0009](https://github.com/Cristian-O/H2/assets/108984738/458d5e85-6163-4ba9-9ace-26c56be0b607)
- [x] STM32L431(working, Reset pin would be usefull for programming using st-link)
- [ ] Lora (SX1280)

>Sensors
- [x] ENS210 (Temp+Humidity)(both working, tested in ArduinoIDE using STM32Duino and Wire, SoftwareSerial for UART2 transmission)
- [x] LTR-390-UV (Light intensity & UV)(tested in both UVS and ALS, precise, fast-up to 20bits of resolution -could be used to determine weather or not energi is produced from solar)
- [x] DS18-B20 (Surface temperature)(working, not very precise at 2.9V but variation of temperature is working)
- [ ] Analog PH (PH of water)(to be tested-no ph probe available)
