import React from "react";
import Button from "../button";
import InputField from "../input-field";

type FormProps = {
  valueName: any;
  valueEmail: any;
  valueBody: any;
  onChangeName?: ((...args: any[]) => any) | undefined;
  onChangeEmail?: ((...args: any[]) => any) | undefined;
  onChangeBody?: ((...args: any[]) => any) | undefined;
};

export default function Form(props: FormProps) {
  const { valueName, valueEmail, valueBody, onChangeName, onChangeEmail, onChangeBody } = props;

  return (
    <>
      <InputField label="Name"   value={valueName} onChange={onChangeName} />
      <InputField label="Short Name"   value={valueEmail} onChange={onChangeEmail} />
      <InputField label="fee"   value={valueBody} onChange={onChangeBody} />
    </>
  );
}
