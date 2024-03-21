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
  const [uploadedImages, setUploadedImages] = useState({
    main_image: "",
    first_floor_map_image: "",
    second_floor_map_image: ""  ,
    sub_image_1: "",
    sub_image_2: "",
  });
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = async (data) => {
    console.log("formData", data);
  
    
    data.main_image = uploadedImages.main_image;
    data.first_floor_map_image = uploadedImages.first_floor_map_image;
    data.second_floor_map_image = uploadedImages.second_floor_map_image;
    data.sub_image_1 = uploadedImages.sub_image_1;
    data.sub_image_2 = uploadedImages.sub_image_2;
    data.second_floor_map_image = uploadedImages.second_floor_map_image;
    const url = 'http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/write/Properties';
  
    setLoading(true);
  
    try {
      const response = await axios.post(url, data);
  
      console.log('Success:', response.data);
      navigate("/properties");
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const listing = [
    { value: "Buy", label: "Buy" },
    { value: "rent", label: "rent" },
    { value: "sale", label: "sale" },
  ];
  const catogery = [
    { value: "Houses", label: "Houses" },
    { value: "Flates", label: "Flates" },
  ];
  const Location = [
    { value: "salfeet", label: "salfeet" },
    { value: "nablus", label: "nablus" },
    { value: "ramallah", label: "ramallah" },
    { value: "Talkurm", label: "Talkurm" },
    { value: "Hebron", label: "Hebron" },
    { value: "bethlehem", label: "bethlehem" },
  ];

  const handleFileUpload = (base64String, fieldName) => {
    console.log("Image base64 string:", base64String);

    // Update the state with the base64 string for the corresponding image field
    setUploadedImages((prevImages) => ({
      ...prevImages,
      [fieldName]: `data:image/jpeg;base64,${base64String}`,
    }));
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
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"sub_title"}
              required={true}
              title="Sub Title"
              type="text"
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
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"contact_no"}
              required={true}
              title="contact No"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"size"}
              required={true}
              title="size"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bed_room_count"}
              required={true}
              title="bed room Count"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bath_count"}
              required={true}
              title="bath Count"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"security_camaras_count"}
              required={true}
              title="security Camera Count"
              type="text"
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
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"floor_type"}
              required={true}
              title="floor Type"
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_floor_available"}
              required={true}
              label="is FLoor Availible"
            />
            <InputDesign
              register={register}
              fieldName={"additional_space_type"}
              required={true}
              title="additional Space Type"
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_additional_space"}
              required={true}
              label="Is aditional Space"
            />
            <InputDesign
              register={register}
              fieldName={"furnished_type"}
              required={true}
              title="furnished Type"
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_furnished"}
              required={true}
              label="Is furnished"
            />
            <InputDesign
              register={register}
              fieldName={"revolution_date"}
              required={true}
              title="revolution Date"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"ceiling_height"}
              required={true}
              title="ceiling Height"
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_ceiling"}
              required={true}
              label = "Is ceiling"
              
            />
            <InputDesign
              register={register}
              fieldName={"construction_year"}
              required={true}
              title="construction Year"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"address"}
              required={true}
              title="address"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"rating_count"}
              required={true}
              title="rating Count"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"currency"}
              required={true}
              title="currency"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"price"}
              required={true}
              title="price"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"_360_url"}
              required={true}
              title="360 Url"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"map_url"}
              required={true}
              title="map Url"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"video_image_address"}
              required={true}
              title="video Url"
              type="text"
            />
        <div className="flex flex-col space-y-4">
        <Upload
  title="main image"
  onFileUpload={(base64String) => handleFileUpload(base64String, 'main_image')}
  register={register}
  fieldName="main_image"
/>
{uploadedImages.main_image && (
         <img src={`${uploadedImages.main_image}`} alt="uploadedImage" width={140} className='mb-6' />
      )}
        </div>

<div className="flex flex-col space-y-4">
<Upload
  title="first floor map image"
  onFileUpload={(base64String) => handleFileUpload(base64String, 'first_floor_map_image')}
  register={register}
  fieldName="first_floor_map_image"
/>
{uploadedImages.first_floor_map_image && (
         <img src={`${uploadedImages.first_floor_map_image}`} alt="uploadedImage" width={140} className='mb-6' />
      )}
</div>
<div className="flex flex-col space-y-4">
<Upload
  title="second_floor_map_image"
  onFileUpload={(base64String) => handleFileUpload(base64String, 'second_floor_map_image')}
  register={register}
  fieldName="second_floor_map_image"
/>
{uploadedImages.second_floor_map_image && (
         <img src={`${uploadedImages.second_floor_map_image}`} alt="uploadedImage" width={140} className='mb-6' />
      )}
</div>


<div className="flex flex-col space-y-4">
<Upload
  title="sub image 1"
  onFileUpload={(base64String) => handleFileUpload(base64String, 'sub_image_1')}
  register={register}
  fieldName="sub_image_1"
/>
{uploadedImages.sub_image_1 && (
         <img src={`${uploadedImages.sub_image_1}`} alt="uploadedImage" width={140} className='mb-6' />
      )}
</div>
<div className="flex flex-col space-y-4">
<Upload
  title="sub image 2"
  onFileUpload={(base64String) => handleFileUpload(base64String, 'sub_image_2')}
  register={register}
  fieldName="sub_image_2"
/>
{uploadedImages.sub_image_2 && (
         <img src={`${uploadedImages.sub_image_2}`} alt="uploadedImage" width={140} className='mb-6' />
      )}
</div>
           
          
           
          </div>
          <h1>Property Good Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"heating_type"}
              required={true}
              title="Heating Type"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"window_type"}
              required={true}
              title="Window Type"
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_pet_friendly"}
              required={true}
              label="Is pet Friendly"
            />
            <Checkbox
              register={register}
              fieldName={"has_heating"}
              required={true}
              label="Has Heating"
            />
            <Checkbox
              register={register}
              fieldName={"has_window"}
              required={true}
              label ="Has Window"
            />
            <Checkbox
              register={register}
              fieldName={"has_air_conditioners"}
              required={true}
              label = "has Air Conditioners"
            />
            <Checkbox
              register={register}
              fieldName={"has_cable_tv"}
              required={true}
              label = "Has Cable TV"
            />
            <Checkbox
              register={register}
              fieldName={"has_fire_place"}
              required={true}
              label= "Has fire place"
            />
            <Checkbox
              register={register}
              fieldName={"has_intercorm"}
              required={true}
              label="Has intercorm"
            />
            <Checkbox
              register={register}
              fieldName={"has_wifi"}
              required={true}
              label = " has wifi"
            />
            <Checkbox
              register={register}
              fieldName={"has_ventillation"}
              required={true}
              label = " has Ventillation"
            />
            <Checkbox
              register={register}
              fieldName={"has_garage"}
              required={true}
              label = " has Garage"
            />
            <Checkbox
              register={register}
              fieldName={"has_swimming_pool"}
              required={true}
              label="has swimming pool"
            />
            <Checkbox
              register={register}
              fieldName={"has_parking"}
              required={true}
              label = "Has Parking"
            />
            <Checkbox
              register={register}
              fieldName={"has_garden"}
              required={true}
              label = "Has Garden"
            />
          </div>
          <h1>proeprty Nearby Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"school_distance"}
              required={true}
              title="school Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"university_distance"}
              required={true}
              title="University Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"hospital_distance"}
              required={true}
              title="hospital Distance"
              
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"metro_station_distance"}
              required={true}
              title="Metro Station Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"grocery_center_distance"}
              required={true}
              title="Grocery Center Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"market_distance"}
              required={true}
              title="Market Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"gym_distance"}
              required={true}
              title="gym Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"river_distance"}
              required={true}
              title="river Distance"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"wellness_distance"}
              required={true}
              title="wellness Distance"
              type="text"
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
