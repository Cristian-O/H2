Tested
- [x] Supercapacitor charging and management (ADP5091)
- [ ] STM32L431 
- [ ] Lora (SX1280)
      
>Sensors
- [ ] ENS210 (Temp+Humidity)
- [ ] LTR-390-UV (Light intensity & UV)
- [ ] DS18-B20 (Surface temperature)
- [ ] Analog PH (PH of water)
      
Working
- [X] Supercapacitor charging and management (ADP5091):

![image](https://github.com/Cristian-O/H2/assets/108984738/be896491-3708-4059-9036-6468f9c8566e)
![image](https://github.com/Cristian-O/H2/assets/108984738/402b6366-94e0-48f5-8fec-9134cf6d7b21)

      Charging to 3.86V and discharge to 2.24V, no reg_out (unstable, <2V, set to 3V), charging over 3V on VIN
      Charging at down to 0.5V tested (working only when CBP capacitor is touched (this can be due to high ESR of CBP capacitor or that it is not soldered properly) => resoldered then replaced with another => same behavior => CBP should be            reordered with lower ESR or PCB redesign without nearby copper pour (for testing 100pF in paralel with 10nF capacitor to emulate HBM-Human Body Model) => To be tested
      Supercapacitor can be charged under 2.2V but it will be slower charging
      Reg_Out will give 3V only in LDO mode (buck and LDO work only for Supercap. charging)
      Reg_Out voltge is controlled only by VID resistor (should give 2.5V when it is not populated) -Reg_out is not working
      Solutions> working with the sys voltage (2.2 to 3.3V range instead of 3.8V max). It should work pretty well (there will be ~5 days lost for a 10F capacitor-it should be 14 days capable) -Aborted(~20% capacity loss)
      Solved=> REG_OUT FB not soldered properly, after conection REG_OUT supplies 3V at V_SUPERCAP> 3V
      REG_D1 and REG_D2 controls mode of operation (now is connected with either VSYS or GND -for LDO or VIN Hybrid Mode, JUMPER for VDD should be connected)
      VDD can be connected to VSYS with VDD jumper(REG_OUT should be connected instead from capacitor to maintain max 3V at VDD)
      
- [ ] STM32L431 
- [ ] Lora (SX1280)

>Sensors
- [ ] ENS210 (Temp+Humidity)
- [ ] LTR-390-UV (Light intensity & UV)
- [ ] DS18-B20 (Surface temperature)
- [ ] Analog PH (PH of water)
