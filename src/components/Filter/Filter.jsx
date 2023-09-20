import React, { useState } from 'react';
import {
  Label,
  Select,
  Input,
  FormGroup,
  FilterContainer,
  MiliageContainer,
} from './Filter.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFilterData(presterData => ({ ...presterData, [name]: value }));
  };

  const handleSearch = e => {
    const { brand, price, mileageFrom, mileageTo } = filterData;
    dispatch(setFilter({ brand, price, mileageFrom, mileageTo }));
  };

  return (
    <FilterContainer>
      <FormGroup $width="225px">
        <Label htmlFor="brand">Car brand</Label>
        <Select
          id="brand"
          name="brand"
          value={filterData.brand || ''}
          onChange={handleChange}
        >
          <option value="">Enter the text</option>
          <option value="buick">Buick</option>
          <option value="volvo">Volvo</option>
          <option value="hummer">HUMMER</option>
          <option value="subaru">Subaru</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="nissan">Nissan</option>
          <option value="lincoln">Lincoln</option>
          <option value="gmc">GMC</option>
          <option value="hyundai">Hyundai</option>
          <option value="mini">MINI</option>
          <option value="bentley">Bentley</option>
          <option value="mercedes">Mercedes-Benz</option>
          <option value="aston">Aston Martin</option>
          <option value="pontiac">Pontiac</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="chrysler">Chrysler</option>
          <option value="kia">Kia</option>
          <option value="land">Land</option>
        </Select>
      </FormGroup>
      <FormGroup $width="125px">
        <Label htmlFor="price">Price/1 hover</Label>
        <Select
          id="price"
          name="price"
          value={filterData.price || ''}
          onChange={handleChange}
        >
          <option value="">To $</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="110">110</option>
          <option value="120">120</option>
          <option value="130">130</option>
          <option value="140">140</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
          <option value="450">450</option>
          <option value="500">500</option>
        </Select>
      </FormGroup>
      <FormGroup $width="320px">
        <Label htmlFor="mileage">Car mileage/km</Label>
        <MiliageContainer>
          <Input
            name="mileageFrom"
            value={filterData.mileageFrom || ''}
            onChange={handleChange}
            placeholder="From"
          ></Input>
          <Input
            name="mileageTo"
            value={filterData.mileageTo || ''}
            onChange={handleChange}
            placeholder="To"
          ></Input>
        </MiliageContainer>
      </FormGroup>
      <Button $height="48px" onClick={handleSearch}>
        Search
      </Button>
    </FilterContainer>
  );
};

export default Filter;
