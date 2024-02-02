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
      
      charging to 3.86V and discharge to 2.24V, no reg_out (unstable, <2V, set to 3V), charging over 3V on VIN
      Charging at down to 0.5V tested (working only when CBP capacitor is touched (this can be due to high ESR of CBP capacitor or that it is not soldered properly)
      Supercap. can be charged under 2.2V but it will be slower charging
      Reg_Out will give 3V only in LDO mode (buck and LDO work only for Supercap. charging)
      Reg_Out voltge is controlled only by VID resistor (should give 2.5V when it is not populated) -Reg_out is not working
      Solutions> working with the sys voltage (2.2 to 3.3V range instead of 3.8V max). It should work pretty well (there will be ~5 days lost for a 10F capacitor-it should be 14 days capable)
      Operating devices will be rated from 1.8 to 3.6V 
      
- [ ] STM32L431 
- [ ] Lora (SX1280)

>Sensors
- [ ] ENS210 (Temp+Humidity)
- [ ] LTR-390-UV (Light intensity & UV)
- [ ] DS18-B20 (Surface temperature)
- [ ] Analog PH (PH of water)
