import React, { useState } from 'react';
import InputDesign from '../InputDesign';
import SelectInputDesign from '../MultiInputSelect';
import Checkbox from '../Checkbox';
import { useNavigate } from 'react-router-dom';
import Upload from '../Upload';
import axios from 'axios';
import { updateProperties } from '../../api/api';
const Form = ({btnText}) => {
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({
        title: '',
        subTitle: '',
        listingType: '',
        location: '',
        categoryType: '',
        description: '',
        contactNo: '',
        size: '',
        bedroomCount: '',
        bathCount: '',
        securityCameraCount: '',
        disabledAccessType: '',
        fenceType: '',
        floorType: '',
        isFloorAvailable: false,
        additionalSpaceType: '',
        isAdditionalSpace: false,
        furnishedType: '',
        isFurnished: false,
        revolutionDate: '',
        ceilingHeight: '',
        isCeiling: false,
        constructionYear: '',
        address: '',
        ratingCount: '',
        currency: '',
        price: '',
        _360Url: '',
        mapUrl: '',
        videoUrl: '',
        mainImage: null,
        firstFloorMapImage: null,
        subImage1: null,
        subImage2: null,
        HeatingType: "",
        WindowType: '',
        isPetFriendly: false,
        hasHeating: false,
        hasWindows: false,
        hasAitConditioner: false,
        hasCableTv: false,
        hasFirstPlace: null,
        hasIntercorm: false,
        hasWifi: false,
        hasVentilation: false,
        hasGeraje: false,
        hasSwimmingPool: false,
        hasParking: false,
        hasGarden: false,
        schoolDistance: "",
        UniversityDistance: "",
        hospitalDistance: "",
        MetroStationDistance: "",
        GroceryCenterDistance: "",
        MarketDistance: "",
        gymDistance: "",
        riverDistance: "",
        wellnessDistance: "",
      });
const handleUpdate = async(userId) =>{
  try {
    await updateProperties(userId)
    console.log('updated Property')
  } catch (error) {
    console.error('Error in updating property', error)
  }
}
      const handleSubmit = (e) => {
        e.preventDefault();
    
     
        const apiUrl = 'http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/write/Properties';
        const formData = new FormData();
        
        for (const key in formValue) {
          if (formValue[key] !== null && formValue[key] !== undefined) {
            if (key === 'mainImage' || key === 'firstFloorMapImage' || key === 'subImage1' || key === 'subImage2') {
              formData.append(key, formValue[key]);
            } else {
              formData.append(key, JSON.stringify(formValue[key]));
            }
          }
        }
        
        axios.post(apiUrl, formData)
          .then(response => {
            console.log('API response:', response.data);
            navigate("/properties");
          })
          .catch(error => {
            console.error('Error sending data to API:', error);
            // Handle errors
          });
      };
      const handleInputChange = (e, fieldName) => {
        setFormValue({
          ...formValue,
          [fieldName]: e.target.value,
        });
      };
    
      const handleCheckboxChange = (fieldName) => {
        setFormValue({
          ...formValue,
          [fieldName]: !formValue[fieldName],
        });
      };
  const listing = [
    
    { value: 'option1', label: 'Buy' },
    { value: 'option2', label: 'rent' },
    
  ];
  const catogery = [
    
    { value: 'option1', label: 'Houses' },
    { value: 'option2', label: 'Flates' },
    
  ];
  const Location = [
    
    { value: 'option1', label: 'salfeet' },
    { value: 'option2', label: 'nablus' },
    { value: 'option3', label: 'ramallah' },
    { value: 'option4', label: 'Talkurm' },
    { value: 'option5', label: 'Hebron' },
    { value: 'option6', label: 'bethlehem' },
   
    
  ];
 
  const handleFileUpload = (file, fieldName) => {
    setFormValue({
      ...formValue,
      [fieldName]: file,
    });
  };
  return (
    <>
      <div className='p-20'>
       
        <form onSubmit={handleSubmit} className='p-4 flex flex-col  w-full'>
        <h1>Add New Property</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
        <InputDesign
          value={formValue.title}
          title="Title"
          onChange={(e) => handleInputChange(e, 'title')}
        />
        <InputDesign
          value={formValue.subTitle}
          title="Sub Title"
          onChange={(e) => handleInputChange(e, 'subTitle')}
        />
        <SelectInputDesign
          title="Select Listing Type"
          options={listing}
          onChange={(e) => handleInputChange(e, 'listingType')}
        />
          <SelectInputDesign
          title="Select location"
          options={Location}
          onChange={(e) => handleInputChange(e, 'locationtype')}
        />
          <SelectInputDesign
          title="Select category Type"
          options={catogery}
          onChange={(e) => handleInputChange(e, 'categoryType')}
        />
          <InputDesign
          value={formValue.description}
          title="description"
          onChange={(e) => handleInputChange(e, 'description')}
          />
          <InputDesign
         value={formValue.contactNo}
         title="contact No"
         onChange={(e) => handleInputChange(e, 'contactNo')}
          />
           <InputDesign
           value={formValue.size}
           title="size"
           onChange={(e) => handleInputChange(e, 'size')}
          />
           <InputDesign
           value={formValue.bedroomCount}
           title="bed room Count"
           onChange={(e) => handleInputChange(e, 'bedroomCount')}
          />
           <InputDesign
           value={formValue.bathCount}
           title="bath Count"
           onChange={(e) => handleInputChange(e, 'bathCount')}
          />
           <InputDesign
           value={formValue.securityCameraCount}
           title="security Camera Count"
           onChange={(e) => handleInputChange(e, 'securityCameraCount')}
          />
           <InputDesign
          value={formValue.disabledAccessType}
          title="disabled Access Type"
          onChange={(e) => handleInputChange(e, 'disabledAccessType')}
          />
           <InputDesign
           value={formValue.fenceType}
           title="fence Type"
           onChange={(e) => handleInputChange(e, 'fenceType')}
          />
           <InputDesign
           value={formValue.floorType}
           title="floor Type"
           onChange={(e) => handleInputChange(e, 'floorType')}
          />
          <Checkbox
        label="Is Floor Availble"
        onChange={() => handleCheckboxChange('isFloorAvailable')}
      />
           <InputDesign
           value={formValue.additionalSpaceType}
           title="additional Space Type"
           onChange={(e) => handleInputChange(e, 'additionalSpaceType')}
          />
                 <Checkbox
        label="Is additional space"
        onChange={() => handleCheckboxChange('isAditionalSpace')}
      />
           <InputDesign
           value={formValue.furnishedType}
           title="furnished Type"
           onChange={(e) => handleInputChange(e, 'furnishedType')}
          />
                           <Checkbox
        label="Is Furnished"
        onChange={() => handleCheckboxChange('isFurnished')}
      />
           <InputDesign
           value={formValue.revolutionDate}
           title="revolution Date"
           onChange={(e) => handleInputChange(e, 'revolutionDate')}
          />
           <InputDesign
           value={formValue.ceilingHeight}
           title="ceiling Height"
           onChange={(e) => handleInputChange(e, 'ceilingHeight')}
          />
                                     <Checkbox
        label="Is celling"
        onChange={() => handleCheckboxChange('IsCelling')}
      />
           <InputDesign
           value={formValue.constructionYear}
           title="construction Year"
           onChange={(e) => handleInputChange(e, 'constructionYear')}
          />
           <InputDesign
           value={formValue.address}
           title="address"
           onChange={(e) => handleInputChange(e, 'address')}
          />
           <InputDesign
           value={formValue.ratingCount}
           title="rating Count"
           onChange={(e) => handleInputChange(e, 'ratingCount')}
          />
           <InputDesign
           value={formValue.currency}
           title="currency"
           onChange={(e) => handleInputChange(e, 'currency')}
          />
           <InputDesign
           value={formValue.price}
           title="price"
           onChange={(e) => handleInputChange(e, 'price')}
          />
           <InputDesign
           value={formValue._360Url}
           title="360 Url"
           onChange={(e) => handleInputChange(e, '_360Url')}
          />
           <InputDesign
           value={formValue.mapUrl}
           title="map Url"
           onChange={(e) => handleInputChange(e, 'mapUrl')}
          />
           <InputDesign
           value={formValue.videoUrl}
           title="video Url"
           onChange={(e) => handleInputChange(e, 'videoUrl')}
          />
       <Upload
          title="Note: Image For Main Image"
          onFileUpload={(file) => handleFileUpload(file, 'mainImage')}
        />
        <Upload
          title="Note: Image For First Floor Map Image"
          onFileUpload={(file) => handleFileUpload(file, 'firstFloorMapImage')}
        />
        <Upload
          title="Note: Image For Sub Image 1"
          onFileUpload={(file) => handleFileUpload(file, 'subImage1')}
        />
        <Upload
          title="Note: Image For Sub Image 2"
          onFileUpload={(file) => handleFileUpload(file, 'subImage2')}
        />
        </div>
        <h1>Property Good Details</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
        <InputDesign
           value={formValue.HeatingType}
           title="Heating Type"
           onChange={(e) => handleInputChange(e, 'HeatingType')}
          />
        <InputDesign
           value={formValue.WindowType}
           title="Window Type"
           onChange={(e) => handleInputChange(e, 'WindowType')}
          />
          <Checkbox
        label="is Pet Friendly"
        onChange={() => handleCheckboxChange('isPetFriendly')}
      />
          <Checkbox
        label="has Heating"
        onChange={() => handleCheckboxChange('hasHeating')}
      />
          <Checkbox
        label="has Windows"
        onChange={() => handleCheckboxChange('hasWindows')}
      />
          <Checkbox
        label="has Air Conditioner"
        onChange={() => handleCheckboxChange('hasAitConditioner')}
      />
          <Checkbox
        label="has Cable Tv"
        onChange={() => handleCheckboxChange('hasCableTv')}
      />
          <Checkbox
        label="has First Place"
        onChange={() => handleCheckboxChange('hasFirstPlace')}
      />
          <Checkbox
        label="has Intercorm"
        onChange={() => handleCheckboxChange('hasIntercorm')}
      />
          <Checkbox
        label="has Wifi"
        onChange={() => handleCheckboxChange('hasWifi')}
      />
          <Checkbox
        label="has Ventilation"
        onChange={() => handleCheckboxChange('hasVentilation')}
      />
          <Checkbox
        label="has Garaje"
        onChange={() => handleCheckboxChange('hasGeraje')}
      />
          <Checkbox
        label="has Swimming Pool"
        onChange={() => handleCheckboxChange('hasSwimmingPool')}
      />
          <Checkbox
        label="has Parking"
        onChange={() => handleCheckboxChange('hasParking')}
      />
          <Checkbox
        label="has Garden"
        onChange={() => handleCheckboxChange('hasGarden')}
      />
        </div>
      <h1>proeprty Nearby Details</h1>
      <div className='grid grid-cols-3 gap-4 p-10'>
      <InputDesign
           value={formValue.schoolDistance}
           title="school Distance"
           onChange={(e) => handleInputChange(e, 'schoolDistance')}
          />
      <InputDesign
           value={formValue.UniversityDistance}
           title="University Distance"
           onChange={(e) => handleInputChange(e, 'UniversityDistance')}
          />
      <InputDesign
           value={formValue.hospitalDistance}
           title="hospital Distance"
           onChange={(e) => handleInputChange(e, 'hospitalDistance')}
          />
      <InputDesign
           value={formValue.MetroStationDistance}
           title="Metro Station Distance"
           onChange={(e) => handleInputChange(e, 'MetroStationDistance')}
          />
      <InputDesign
           value={formValue.GroceryCenterDistance}
           title="Grocery Center Distance"
           onChange={(e) => handleInputChange(e, 'GroceryCenterDistance')}
          />
      <InputDesign
           value={formValue.MarketDistance}
           title="Market Distance"
           onChange={(e) => handleInputChange(e, 'MarketDistance')}
          />
      <InputDesign
           value={formValue.gymDistance}
           title="gym Distance"
           onChange={(e) => handleInputChange(e, 'gymDistance')}
          />
      <InputDesign
           value={formValue.riverDistance}
           title="river Distance"
           onChange={(e) => handleInputChange(e, 'riverDistance')}
          />
      <InputDesign
           value={formValue.wellnessDistance}
           title="wellness Distance"
           onChange={(e) => handleInputChange(e, 'wellnessDistance')}
          />
      </div>
          <div className='flex items-center w-full justify-center'>
          <button type="submit" className='bg-[#1ebbd7] py-2 px-44 rounded-lg text-white'>{btnText}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;