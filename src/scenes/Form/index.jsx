import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from '@mui/icons-material/Home';


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("min-width: 600px")
  const formik = useFormik({
    initialValues: {
      fullName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{margin: "20px", height: "100%"}}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <div>
      <form onSubmit={formik.handleSubmit}>
            <Box
              display="grid"
              pt={2}
              gap="30px"
              m={`${isNonMobile ? "60px" : "0"}`}
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: `${isNonMobile ? "span 2" : "span 4"}`},
              }}
            >
              <TextField
                id="fullName"
                variant="filled"
                type="text"
                label="Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                name="fullName"
                error={formik.touched.fullName && formik.errors.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>
                  ),
                }}
                sx={{ gridColumn: `${isNonMobile ? "span 2" : "span 4"}` }}
              />
              <TextField
                id="email"
                variant="filled"
                type="text"
                label="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><EmailIcon /></InputAdornment>
                  ),
                }}
              />
              <TextField
                id="contact"
                variant="filled"
                type="text"
                label="Contact Number"
                onChange={formik.handleChange}
                value={formik.values.contact}
                name="contact"
                error={formik.touched.contact && formik.errors.contact}
                helperText={formik.touched.contact && formik.errors.contact}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><CallIcon /></InputAdornment>
                  ),
                }}
                />
              <TextField
                id="address1"
                variant="filled"
                type="text"
                label="Address 1"
                onChange={formik.handleChange}
                value={formik.values.address1}
                name="address1"
                error={formik.touched.address1 && formik.errors.address1}
                helperText={formik.touched.address1 && formik.errors.address1}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><HomeIcon /></InputAdornment>
                  ),
                }}
                />
              <TextField
                id="address2"
                variant="filled"
                type="text"
                label="Address 2"
                onChange={formik.handleChange}
                value={formik.values.address2}
                name="address2"
                error={formik.touched.address2 && formik.errors.address2}
                helperText={formik.touched.address2 && formik.errors.address2}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><HomeIcon /></InputAdornment>
                  ),
                }}
                />
            </Box>
            <Box display="flex" justifyContent="end" m="60px 0 0 0">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
      </div>
    </Box>
  );
};

export default Form;
