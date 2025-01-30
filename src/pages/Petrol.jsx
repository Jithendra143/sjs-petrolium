/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { useForm } from "../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../shared/util/validators";
import classes from "./Default.module.css";
import Table from "../components/Table/Table";

export default function Petrol() {
  const [currentStep, setCurrentStep] = useState(1);
  const [salesData, setSalesData] = useState([]);
  const totalSteps = 3;
  const [formState, inputHandler] = useForm(
    {
      pump1_prev_reading: { value: "", isValid: false },
      pupm1_current_reading: { value: "", isValid: false },
      pump1_testing: { value: "", isValid: false },
      pump1_total: { value: "", isValid: false },
      pump2_prev_reading: { value: "", isValid: false },
      pupm2_current_reading: { value: "", isValid: false },
      pump2_testing: { value: "", isValid: false },
      pump2_total: { value: "", isValid: false },
      total_sold: { value: "", isValid: false },
      price: { value: "", isValid: false },
      total_price: { value: "", isValid: false },
    },
    false
  );

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Pump 1 total sold
  const pump1TotalSold = () => {
    const prevReading = parseFloat(formState.inputs.pump1_prev_reading.value);
    const curReading = parseFloat(formState.inputs.pupm1_current_reading.value);
    const testing = parseFloat(formState.inputs.pump1_testing.value);

    if (!isNaN(prevReading) && !isNaN(curReading) && !isNaN(testing)) {
      const totalSold = curReading - prevReading - testing;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0;
    }
    return "";
  };

  useEffect(() => {
    const total = pump1TotalSold();
    inputHandler("pump1_total", total, total >= 0);
  }, [
    inputHandler,
    formState.inputs.pump1_prev_reading.value,
    formState.inputs.pupm1_current_reading.value,
    formState.inputs.pump1_testing.value,
  ]);

  // Pump 2 total Sold
  const pump2TotalSold = () => {
    const prevReading = parseFloat(formState.inputs.pump2_prev_reading.value);
    const curReading = parseFloat(formState.inputs.pupm2_current_reading.value);
    const testing = parseFloat(formState.inputs.pump2_testing.value);

    if (!isNaN(prevReading) && !isNaN(curReading) && !isNaN(testing)) {
      const totalSold = curReading - prevReading - testing;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0;
    }
    return "";
  };

  useEffect(() => {
    const total = pump2TotalSold();
    inputHandler("pump2_total", total, total >= 0);
  }, [
    inputHandler,
    formState.inputs.pump2_prev_reading.value,
    formState.inputs.pupm2_current_reading.value,
    formState.inputs.pump2_testing.value,
  ]);

  // Pump1 + Pump2 = Total
  const totalSold = () => {
    const pump1 = parseFloat(formState.inputs.pump1_total.value);
    const pump2 = parseFloat(formState.inputs.pump2_total.value);

    if (!isNaN(pump1) && !isNaN(pump2)) {
      const totalSold = pump1 + pump2;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0;
    }
    return "";
  };

  useEffect(() => {
    const total = totalSold();
    inputHandler("total_sold", total, total >= 0);
  }, [
    inputHandler,
    formState.inputs.pump1_total.value,
    formState.inputs.pump2_total.value,
  ]);

  // Total sold * Price
  const totalSaleAmount = () => {
    const totalFule = parseFloat(formState.inputs.total_sold.value);
    const price = parseFloat(formState.inputs.price.value);

    if (!isNaN(totalFule) && !isNaN(price)) {
      const total = price * totalFule;
      return total >= 0 ? parseFloat(total.toFixed(2)) : 0;
    }
    return "";
  };

  useEffect(() => {
    const totalAmount = totalSaleAmount();
    inputHandler("total_price", totalAmount, totalAmount >= 0);
  }, [
    inputHandler,
    formState.inputs.total_sold.value,
    formState.inputs.price.value,
  ]);

  const salesSubmitHandler = (event) => {
    event.preventDefault();
    setSalesData((prevData) => [
      ...prevData,
      {
        pump1_prev_reading: formState.inputs.pump1_prev_reading.value,
        pupm1_current_reading: formState.inputs.pupm1_current_reading.value,
        pump1_testing: formState.inputs.pump1_testing.value,
        pump1_total: formState.inputs.pump1_total.value,
        pump2_prev_reading: formState.inputs.pump2_prev_reading.value,
        pupm2_current_reading: formState.inputs.pupm2_current_reading.value,
        pump2_testing: formState.inputs.pump2_testing.value,
        pump2_total: formState.inputs.pump2_total.value,
        total_sold: formState.inputs.total_sold.value,
        price: formState.inputs.price.value,
        total_price: formState.inputs.total_price.value,
      },
    ]);
  };


  return (
    <>
      {salesData && salesData.length > 0 && (
        <div className={classes["sales-form"]}>
          <h2>Data updated for today plese check the sales report</h2>
        </div>
      )}
      { salesData.length === 0 && (
        <form className={classes["sales-form"]} onSubmit={salesSubmitHandler}>
          {currentStep === 1 && (
            <>
              <h2>Pump 1 Details</h2>
              <Input
                id="pump1_prev_reading"
                type="number"
                element="input"
                label="Pump1 Prev Reading"
                placeholder="Pump 1 Previous reading"
                initialValue={formState.inputs.pump1_prev_reading.value}
                initialIsValid={formState.inputs.pump1_prev_reading.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pupm1_current_reading"
                type="number"
                element="input"
                label="Pump1 Current Reading"
                placeholder="Pump 1 Current Reading"
                initialValue={formState.inputs.pupm1_current_reading.value}
                initialIsValid={formState.inputs.pupm1_current_reading.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pump1_testing"
                type="number"
                element="input"
                label="Pump1 Testing(in Liters)"
                placeholder="Pump 1 Testing"
                initialValue={formState.inputs.pump1_testing.value}
                initialIsValid={formState.inputs.pump1_testing.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pump1_total"
                type="number"
                element="input"
                label="Pump1 Total Sold"
                initialValue={formState.inputs.pump1_total.value}
                initialIsValid={formState.inputs.pump1_total.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                disabled={true}
              />
            </>
          )}
          {currentStep === 2 && (
            <>
              <h2>Pump 2 Details</h2>
              <Input
                id="pump2_prev_reading"
                type="number"
                element="input"
                label="Pump2 Prev Reading"
                placeholder="Pump 2 Previous reading"
                initialValue={formState.inputs.pump2_prev_reading.value}
                initialIsValid={formState.inputs.pump2_prev_reading.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pupm2_current_reading"
                type="number"
                element="input"
                label="Pump2 Current Reading"
                placeholder="Pump 2 Current Reading"
                initialValue={formState.inputs.pupm2_current_reading.value}
                initialIsValid={formState.inputs.pupm2_current_reading.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pump2_testing"
                type="number"
                element="input"
                label="Pump2 Testing(in Liters)"
                placeholder="Pump 2 Testing"
                initialValue={formState.inputs.pump2_testing.value}
                initialIsValid={formState.inputs.pump2_testing.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="pump2_total"
                type="number"
                element="input"
                label="Pump2 Total Sold"
                initialValue={formState.inputs.pump2_total.value}
                initialIsValid={formState.inputs.pump2_total.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                disabled={true}
              />
            </>
          )}
          {currentStep === 3 && (
            <>
              <h2>Sales Details</h2>
              <Input
                id="total_sold"
                type="number"
                element="input"
                label="Total Liters Sold (Pump1 + Pump2)"
                initialValue={formState.inputs.total_sold.value}
                initialIsValid={formState.inputs.total_sold.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                disabled={true}
              />
              <Input
                id="price"
                type="number"
                element="input"
                label="Today's Petrol Price"
                initialValue={formState.inputs.price.value}
                initialIsValid={formState.inputs.price.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <Input
                id="total_price"
                type="number"
                element="input"
                label="Total Liters Sold x Today's Price"
                initialValue={formState.inputs.total_price.value}
                initialIsValid={formState.inputs.total_price.isValid}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                disabled={true}
              />
            </>
          )}

          <Button type="button" onClick={prevStep} disabled={currentStep === 1}>
            Prev
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={currentStep === totalSteps}
          >
            Next
          </Button>
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        </form>
      )}

      {salesData && salesData.length > 0 && (
        <div className={classes["sale-details"]}>
          <h2>Today's Sales</h2>
          <Table salesData={salesData} />
        </div>
      )}
    </>
  );
}
