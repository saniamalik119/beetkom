import React, { useState } from "react";
import InputDesign from "../InputDesign";
import SelectInputDesign from "../MultiInputSelect";
import Checkbox from "../Checkbox";
import { useNavigate } from "react-router-dom";
import Upload from "../Upload";
import axios from "axios";
import { useForm } from "react-hook-form";

import { addDataApi } from "../../api/api";
const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data", data);
    try {
      setLoading(true);
      const response = await addDataApi(data);
      console.log("API Response", response);
      navigate('/properties');
    } catch (error) {
      console.error("Error in entering data", error);
    } finally {
      setLoading(false);
    }
  };

  const listing = [
    { value: "option1", label: "Buy" },
    { value: "option2", label: "rent" },
  ];
  const catogery = [
    { value: "option1", label: "Houses" },
    { value: "option2", label: "Flates" },
  ];
  const Location = [
    { value: "option1", label: "salfeet" },
    { value: "option2", label: "nablus" },
    { value: "option3", label: "ramallah" },
    { value: "option4", label: "Talkurm" },
    { value: "option5", label: "Hebron" },
    { value: "option6", label: "bethlehem" },
  ];

  const handleFileUpload = (file, fieldName) => {
    setValue(fieldName, file[0]); // Assuming file is an array, and you want to set the first file
  };
  return (
    <>
      <div className="p-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 flex flex-col w-full"
        >
          <h1>Add New Property</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"title"}
              required={true}
              title="Title"
              value="email"
            />
            <InputDesign
              register={register}
              fieldName={"sub_title"}
              required={true}
              title="Sub Title"
            />
            <SelectInputDesign
              register={register}
              fieldName={"listing_type"}
              required={true}
              options={listing}
            />
            <SelectInputDesign
              register={register}
              fieldName={"location_area"}
              required={true}
              options={Location}
            />
            <SelectInputDesign
              register={register}
              fieldName={"category_type"}
              required={true}
              options={catogery}
            />
            <InputDesign
              register={register}
              fieldName={"description"}
              required={true}
              title="description"
            />
            <InputDesign
              register={register}
              fieldName={"contact_no"}
              required={true}
              title="contact No"
            />
            <InputDesign
              register={register}
              fieldName={"size"}
              required={true}
              title="size"
            />
            <InputDesign
              register={register}
              fieldName={"bed_room_count"}
              required={true}
              title="bed room Count"
            />
            <InputDesign
              register={register}
              fieldName={"bath_count"}
              required={true}
              title="bath Count"
            />
            <InputDesign
              register={register}
              fieldName={"security_cameras_count"}
              required={true}
              title="security Camera Count"
            />
            <InputDesign
              register={register}
              fieldName={"disabled_access_type"}
              required={true}
              title="disabled Access Type"
            />
            <InputDesign
              register={register}
              fieldName={"fence_type"}
              required={true}
              title="fence Type"
            />
            <InputDesign
              register={register}
              fieldName={"floor_type"}
              required={true}
              title="floor Type"
            />
            <Checkbox
              register={register}
              fieldName={"is_floor_available"}
              required={true}
            />
            <InputDesign
              register={register}
              fieldName={"additional_space_type"}
              required={true}
              title="additional Space Type"
            />
            <Checkbox
              register={register}
              fieldName={"is_additional_space"}
              required={true}
            />
            <InputDesign
              register={register}
              fieldName={"furnished_type"}
              required={true}
              title="furnished Type"
            />
            <Checkbox
              register={register}
              fieldName={"is_furnished"}
              required={true}
            />
            <InputDesign
              register={register}
              fieldName={"revolution_date"}
              required={true}
              title="revolution Date"
            />
            <InputDesign
              register={register}
              fieldName={"ceiling_height"}
              required={true}
              title="ceiling Height"
            />
            <Checkbox
              register={register}
              fieldName={"is_ceiling"}
              required={true}
            />
            <InputDesign
              register={register}
              fieldName={"construction_year"}
              required={true}
              title="construction Year"
            />
            <InputDesign
              register={register}
              fieldName={"address"}
              required={true}
              title="address"
            />
            <InputDesign
              register={register}
              fieldName={"rating_count"}
              required={true}
              title="rating Count"
            />
            <InputDesign
              register={register}
              fieldName={"currency"}
              required={true}
              title="currency"
            />
            <InputDesign
              register={register}
              fieldName={"price"}
              required={true}
              title="price"
            />
            <InputDesign
              register={register}
              fieldName={"_360_url"}
              required={true}
              title="360 Url"
            />
            <InputDesign
              register={register}
              fieldName={"map_url"}
              required={true}
              title="map Url"
            />
            <InputDesign
              register={register}
              fieldName={"video_image_address"}
              required={true}
              title="video Url"
            />
            <Upload
              register={register}
              fieldName={"main_image"}
              required={true}
              onFileUpload={(file) => handleFileUpload(file, "mainImage")}
            />
            <Upload
              register={register}
              fieldName={"first_floor_map_image"}
              required={true}
              onFileUpload={(file) =>
                handleFileUpload(file, "firstFloorMapImage")
              }
            />
            <Upload
              register={register}
              fieldName={"sub_image_1"}
              required={true}
              onFileUpload={(file) => handleFileUpload(file, "subImage1")}
            />
            <Upload
              register={register}
              fieldName={"sub_image_2"}
              required={true}
              onFileUpload={(file) => handleFileUpload(file, "subImage2")}
            />
          </div>
          <h1>Property Good Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"heating_type"}
              required={true}
              title="Heating Type"
            />
            <InputDesign
              register={register}
              fieldName={"window_type"}
              required={true}
              title="Window Type"
            />
            <Checkbox
              register={register}
              fieldName={"is_pet_friendly"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_heating"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_window"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_air_conditioners"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_cable_tv"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_fire_place"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_intercorm"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_wifi"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_ventillation"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_garage"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_swimming_pool"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_parking"}
              required={true}
            />
            <Checkbox
              register={register}
              fieldName={"has_garden"}
              required={true}
            />
          </div>
          <h1>proeprty Nearby Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"school_distance"}
              required={true}
              title="school Distance"
            />
            <InputDesign
              register={register}
              fieldName={"university_distance"}
              required={true}
              title="University Distance"
            />
            <InputDesign
              register={register}
              fieldName={"hospital_distance"}
              required={true}
              title="hospital Distance"
            />
            <InputDesign
              register={register}
              fieldName={"metro_station_distance"}
              required={true}
              title="Metro Station Distance"
            />
            <InputDesign
              register={register}
              fieldName={"grocery_center_distance"}
              required={true}
              title="Grocery Center Distance"
            />
            <InputDesign
              register={register}
              fieldName={"market_distance"}
              required={true}
              title="Market Distance"
            />
            <InputDesign
              register={register}
              fieldName={"gym_distance"}
              required={true}
              title="gym Distance"
            />
            <InputDesign
              register={register}
              fieldName={"river_distance"}
              required={true}
              title="river Distance"
            />
            <InputDesign
              register={register}
              fieldName={"wellness_distance"}
              required={true}
              title="wellness Distance"
            />
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              type="submit"
              // onClick={() => handleSubmit(handleFormSubmit)()}
              className="bg-[#1ebbd7] py-2 px-44 rounded-lg text-white"
            >
           {loading? "SUbmitting..." :  " Submit"}
            </button>
          </div>
          {errors && Object.keys(errors).length > 0 && (
            <div className="text-red-500">
              <p>Fill Complete Form</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
