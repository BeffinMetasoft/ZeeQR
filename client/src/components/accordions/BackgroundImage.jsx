import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiCamera } from "react-icons/fi";


export default function BackgroundImage() {
  return (
    <div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"

        >
          <Typography  >Background  Image</Typography>

        </AccordionSummary>
        <hr />
        <AccordionDetails >
          <Typography>
            <div>
            <label className=' cursor-pointer  flex gap-3 text-sm' htmlFor="img-upload"><FiCamera size={26} /> Upload Your Background Image </label>
            <input type="file" id="img-upload" name='image' className='hidden' />
            </div>
            
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}