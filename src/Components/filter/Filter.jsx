import './filter.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Filter = () => {
  return (
    <div className='filter'>
      <div className="filterTitle">
        <h3>Categories</h3>
      </div>
      <FormGroup className="inputFilterOptionContainer">
        <FormControlLabel control={<Checkbox size="small"/>} label="Label" />
      </FormGroup>
    </div>
  )
}

export default Filter