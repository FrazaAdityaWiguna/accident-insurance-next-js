import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import NextHead from "../components/layout/nextHead";
import { ArrowLeft, Clipboard } from "react-feather";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function FormClaim() {
  return (
    <>
      <Container maxWidth="md">
        <NextHead title="Form Klaim" />
        <header>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "30px 0",
            }}
            className="color-primary"
          >
            <ArrowLeft color="#1103a6" />
            <Box sx={{ marginLeft: "10px", fontWeight: "bold" }}>
              Registrasi Klaim
            </Box>
          </Box>
        </header>

        <Card sx={{ marginBottom: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
                padding: "15px 20px",
                borderRadius: "5px",
                position: "relative",
                backgroundColor: "rgba(95, 82, 235, 0.1)",
              }}
            >
              <Clipboard fill="#fff" />
            </Box>
            <div>Formulir Klaim</div>
          </Box>
        </Card>

        <Box
          className="color-primary"
          sx={{
            backgroundColor: "rgba(95, 82, 235, 0.1)",
            textAlign: "center",
            padding: "10px 0",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Registrasi Klaim: B 1234 EFG
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #eee",
            borderRadius: "5px",
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography sx={{ minWidth: 150 }}>No. Polisi</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dicta velit provident sit. Aliquid eos, numquam placeat eius
              dolorum hic quo in eligendi ea illo odio voluptate inventore saepe
              autem!
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography sx={{ minWidth: 150 }}>Nama Tanggungan</Typography>
            <Typography>No. Polisi</Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography sx={{ minWidth: 150 }}>No Polis</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              excepturi dolorum voluptatum quasi saepe nam, aspernatur fugit
              vero optio eveniet?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography sx={{ minWidth: 150 }}>Nilai Pertanggunan</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              excepturi dolorum voluptatum quasi saepe nam, aspernatur fugit
              vero optio eveniet?
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #eee",
            borderRadius: "5px",
            display: "flex",
            padding: "10px",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Nama Pengemudi"
            multiline
            maxRows={4}
            variant="standard"
            sx={{ color: "#5f52eb" }}
          />

          <FormControl
            variant="standard"
            sx={{ minWidth: 120, marginBottom: "20px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Lain-lain
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Lain-lain"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              // value={value}
              // onChange={handleChange}
              renderInput={(params) => (
                <TextField {...params} label="Standard" variant="standard" />
              )}
            />
          </LocalizationProvider>

          <FormControl
            variant="standard"
            sx={{ minWidth: 120, marginBottom: "20px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Lain-lain
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Lain-lain"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Input
            placeholder="Silakan isi hubungan dengan tanggungan"
            sx={{ marginBottom: "20px" }}
          />
          <Input placeholder="Silakan isi penyebab" />
        </Box>

        <div>Form Claim</div>
      </Container>
    </>
  );
}
