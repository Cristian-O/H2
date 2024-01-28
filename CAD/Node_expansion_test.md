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
- [ ] Supercapacitor charging and management (ADP5091):
      
      charging to 3.86V and discharge to 2.24V, no reg_out (unstable, <2V, set to 3V), charging over 3V on VIN
      Charging at down to 0.5V tested (working only when CBP capacitor is touched (this can be due to high ESR of CBP capacitor or that it is not soldered properly)
      Supercap. can be charged under 2.2V but it will be slow charging
      Reg_Out will give 3V only in LDO mode (buck and LDO work only for Supercap. charging)
      Reg_Out voltge is controlled only by VID resistor (should give 2.5V when it is not populated-to be tested)
      
- [ ] STM32L431 
- [ ] Lora (SX1280)

>Sensors
- [ ] ENS210 (Temp+Humidity)
- [ ] LTR-390-UV (Light intensity & UV)
- [ ] DS18-B20 (Surface temperature)
- [ ] Analog PH (PH of water)
