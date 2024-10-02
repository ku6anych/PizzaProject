import NotFoundComponent from '../components/NotFoundComponent/NotFoundComponent';
import { Box } from '@mui/material';
// make adaptive for navbar sort header, pizza block, @media(max-width:1200){}

//make the  api to be sorted by categoryID firebaseSortParam
//make check up on api queries like categoriesId and sortId
//make des and asc for all sort

//make search input in the header make it controllable make it searchable in link as well
//make pagination with firebase the page num should be in useState

const NotFound = () => {
  return (
    <Box component="div">
      <NotFoundComponent />
    </Box>
  );
};

export default NotFound;
