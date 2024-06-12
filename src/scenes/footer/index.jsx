import { Box, Button, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  const handleUploadIconMain = async (e, id) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/help-center/upload/main/${id}`,
        formData
      );

      console.log("Imagen subida exitosamente:", response.data);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const handleSubmitMain = async ({ id, title }) => {
    await axios.put(`http://localhost:3000/api/footer/${id}`, {
      title,
    });

    getData();
  };
  const handleSubmitSubitem = async ({ id, title, content }) => {
    await axios.put(`http://localhost:3000/api/footer/item/${id}`, {
      title,
      info: content,
    });
    getData();
  };

  useEffect(() => {
    getData();
    return () => {
      setFooterData([]);
    };
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3000/api/footer/")
      .then((response) => setFooterData(response.data));
  };


  return (
    <Box m="20px">
      <Header title="Footer" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {footerData?.length
          ? footerData.map((item, idx) => (
              <MainItem
                item={item}
                key={idx}
                icon={false}
                subitems={item.FooterItems}
                handleSubmit={handleSubmitMain}
                handleSubitemSubmit={handleSubmitSubitem}
                handleUploadIcon={handleUploadIconMain}
              />
            ))
          : null}
      </div>
    </Box>
  );
};

const MainItem = ({
  item,
  subitems,
  handleSubmit,
  handleSubitemSubmit,
  handleUploadIcon,
  icon,
}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Accordion expanded style={{ marginBlock: 0, minWidth: 300 }}>
      <AccordionSummary style={{ alignItems: "center" }}>
        {icon ? (
          <>
            <img
              alt="icon"
              src={item.iconURL}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginRight: 16,
              }}
              onClick={() => document.getElementById("fileInput").click()}
            />
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => handleUploadIcon(e, item.id)}
            />
          </>
        ) : null}
        {editing ? (
          <div
            style={{ display: "flex", flexDirection: "row", flex: 1, gap: 16 }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", flex: 1 }}
            />
            <Button
              variant="contained"
              color={"primary"}
              onClick={() => setEditing(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color={"secondary"}
              onClick={() =>
                handleSubmit({ id: item.id, title }).then(() =>
                  setEditing(false)
                )
              }
            >
              Enviar
            </Button>
          </div>
        ) : (
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            onClick={() => setEditing(true)}
          >
            {item.title}
          </Typography>
        )}
      </AccordionSummary>
      {subitems.length
        ? subitems.map((subitem) => (
            <SubItem item={subitem} handleSubmit={handleSubitemSubmit} />
          ))
        : null}
    </Accordion>
  );
};

const SubItem = ({ item, handleSubmit }) => {
  const [editingTop, setEditingTop] = useState(false);
  const [editionContent, setEditingContent] = useState(false);
  const [title, setTitle] = useState(item.title || item.question);
  const [content, setContent] = useState(item.info || item.answer);

  return (
    <AccordionDetails>
      {editingTop ? (
        <div
          style={{ display: "flex", flexDirection: "col", flex: 1, gap: 16 }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", flex: 1 }}
          />
          <Button
            variant="contained"
            color={"primary"}
            style={{ alignSelf: "flex-start" }}
            onClick={() => setEditingTop(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color={"secondary"}
            style={{ alignSelf: "flex-start" }}
            onClick={() =>
              handleSubmit({ id: item.id, title, content }).then(() =>
                setEditingTop(false)
              )
            }
          >
            Enviar
          </Button>
        </div>
      ) : (
        <Typography
          fontSize={16}
          fontWeight={"bold"}
          mb={1}
          onClick={() => setEditingTop(true)}
        >
          {item.title || item.question}
        </Typography>
      )}
      {editionContent ? (
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", flex: 1 }}
          />
          <div style={{ marginLeft: "auto" }}>
            <Button
              variant="contained"
              color={"primary"}
              style={{ alignSelf: "flex-start" }}
              onClick={() => setEditingContent(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color={"secondary"}
              style={{ alignSelf: "flex-start" }}
              onClick={() =>
                handleSubmit({ id: item.id, title, content }).then(() =>
                  setEditingContent(false)
                )
              }
            >
              Enviar
            </Button>
          </div>
        </div>
      ) : (
        <Typography onClick={() => setEditingContent(true)}>
          {item.info || item.answer}
        </Typography>
      )}
    </AccordionDetails>
  );
};
export default Footer;
