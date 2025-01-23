/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useForm } from "../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../shared/util/validators";

import classes from "./Default.module.css";

export default function Petrol() {
  const [formState, inputHandler] = useForm(
    {
      pump1_prev_reading: {
        value: "",
        isValid: false,
      },
      pupm1_cur_reading: {
        value: "",
        isValid: false,
      },
      pump1_total_sold: {
        value: "",
        isValid: false,
      },
      pump2_prev_reading: {
        value: "",
        isValid: false,
      },
      pupm2_cur_reading: {
        value: "",
        isValid: false,
      },
      pump2_total_sold: {
        value: "",
        isValid: false,
      },
      total_liters: {
        value: "",
        isValid: false,
      },
      testing_liters: {
        value: "",
        isValid: false,
      },
      total_sold: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      total_price: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // Calculate total sold based on prev and current readings
  const firstPumpTotalSold = () => {
    const prevReading = parseFloat(formState.inputs.pump1_prev_reading.value);
    const currentReading = parseFloat(formState.inputs.pupm1_cur_reading.value);

    if (!isNaN(prevReading) && !isNaN(currentReading)) {
      const totalSold = currentReading - prevReading;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0; // Ensure it's not negative
    }
    return "";
  };

  useEffect(() => {
    const totalSold = firstPumpTotalSold();
    inputHandler("pump1_total_sold", totalSold, totalSold >= 0); // Update the form state
  }, [
    formState.inputs.pump1_prev_reading.value,
    formState.inputs.pupm1_cur_reading.value,
    inputHandler,
  ]);

  const secondPumpTotalSold = () => {
    const prevReading = parseFloat(formState.inputs.pump2_prev_reading.value);
    const currentReading = parseFloat(formState.inputs.pupm2_cur_reading.value);

    if (!isNaN(prevReading) && !isNaN(currentReading)) {
      const totalSold = currentReading - prevReading;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0; // Ensure it's not negative
    }
    return "";
  };

  useEffect(() => {
    const totalSold = secondPumpTotalSold();
    inputHandler("pump2_total_sold", totalSold, totalSold >= 0); // Update the form state
  }, [
    formState.inputs.pump2_prev_reading.value,
    formState.inputs.pupm2_cur_reading.value,
    inputHandler,
  ]);

  const calculateTotalLiters = () => {
    const firstPumpTotal = parseFloat(formState.inputs.pump1_total_sold.value);
    const secondPumpTotal = parseFloat(formState.inputs.pump2_total_sold.value);

    if (!isNaN(firstPumpTotal) && !isNaN(secondPumpTotal)) {
      const totalSold = firstPumpTotal + secondPumpTotal;
      return totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0;
    }

    return "";
  };

  useEffect(() => {
    const totalSold = calculateTotalLiters();
    inputHandler("total_liters", totalSold, totalSold >= 0);
  }, [
    inputHandler,
    formState.inputs.pump1_total_sold.value,
    formState.inputs.pump2_total_sold.value,
  ]);

  const calculateTotalLitersSold = () => {
    const totalLiters = parseFloat(formState.inputs.total_liters.value);
    const testingLiters = parseFloat(formState.inputs.testing_liters.value);

    if (!isNaN(totalLiters) && !isNaN(testingLiters)) {
      const totalSold = totalLiters - testingLiters;

      const roundedTotalSold =
        totalSold >= 0 ? parseFloat(totalSold.toFixed(2)) : 0;
      return roundedTotalSold;
    }

    console.error("Invalid input values:", totalLiters, testingLiters);
    return "";
  };

  useEffect(() => {
    const totalSold = calculateTotalLitersSold();
    inputHandler("total_sold", totalSold, totalSold >= 0);
  }, [
    inputHandler,
    formState.inputs.total_liters.value,
    formState.inputs.testing_liters.value,
  ]);

  const claculateTotalPrice = () => {
    const totalSold = parseFloat(formState.inputs.total_sold.value);
    const price = parseFloat(formState.inputs.price.value);

    if (!isNaN(totalSold) && !isNaN(price)) {
      const totalPrice = totalSold * price;
      return totalPrice >= 0 ? parseFloat(totalPrice.toFixed(2)) : 0;
    }

    return "";
  };

  useEffect(() => {
    const totalPrice = claculateTotalPrice();
    inputHandler("total_price", totalPrice, totalPrice >= 0);
  }, [
    inputHandler,
    formState.inputs.total_sold.value,
    formState.inputs.price.value,
  ]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <div className={classes["page-title"]}>
        <h1>Add MS Sale Deatils</h1>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["form-section"]}>
          <div className={classes["pumps-container"]}>
            <div className={classes.pump}>
              <h2>Pump 1</h2>
              <Input
                id="pump1_prev_reading"
                element="input"
                type="number"
                label="Prev Reading"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please eneter valid reading"
                onInput={inputHandler}
              />
              <Input
                id="pupm1_cur_reading"
                element="input"
                type="number"
                label="Today's Reading"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please eneter valid reading"
                onInput={inputHandler}
              />
              <Input
                id="pump1_total_sold"
                element="input"
                type="number"
                label="Total Liters Sold(as per reading)"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please check the Total"
                onInput={inputHandler}
                value={formState.inputs.pump1_total_sold.value}
                disable={true}
              />
            </div>
            <div className={classes.pump}>
              <h2>Pump 2</h2>
              <Input
                id="pump2_prev_reading"
                element="input"
                type="number"
                label="Prev Reading"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please eneter valid reading"
                onInput={inputHandler}
              />
              <Input
                id="pupm2_cur_reading"
                element="input"
                type="number"
                label="Today's Reading"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please eneter valid reading"
                onInput={inputHandler}
              />
              <Input
                id="pump2_total_sold"
                element="input"
                type="number"
                label="Total Liters Sold(as per reading)"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please check the Total"
                onInput={inputHandler}
                value={formState.inputs.pump2_total_sold.value}
                disable={true}
              />
            </div>
          </div>
          <div className="total">
            <Input
              id="total_liters"
              element="input"
              type="number"
              label="Total Liters (Pump1 + Pump2)"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please check the Total"
              onInput={inputHandler}
              value={formState.inputs.total_liters.value}
              disable={true}
            />
            <Input
              id="testing_liters"
              element="input"
              type="number"
              label="Testing in Liters"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please check the value"
              onInput={inputHandler}
            />
            <Input
              id="total_sold"
              element="input"
              type="number"
              label="Totla Liters Sold"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please check the total"
              onInput={inputHandler}
              value={formState.inputs.total_sold.value}
              disable={true}
            />
            <Input
              id="price"
              element="input"
              type="number"
              label="Today's Petrol Price"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter Today's Price"
              onInput={inputHandler}
            />
            <Input
              id="total_price"
              element="input"
              type="number"
              label="Total Liters Sold and Today's Price"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please check the Price"
              onInput={inputHandler}
              value={formState.inputs.total_price.value}
              disable={true}
            />
          </div>
          <div className={classes.buttons}>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </>
  );
}
