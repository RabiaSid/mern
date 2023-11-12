import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Form from "../../components/form";
import { Get, Post, Put } from "../../config/api-methods";

export default function ProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>({});
  const fillpost = (key: string, val: string) => {
    post[key] = val;
    setPost({ ...post });
  };


  const getPostById = () => {
    Get(`course/${params.id}`)
      .then((res) => {
        console.log("Succesfully --get Single data ", { ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // new post
  const newPost = () => {
    // post._id = 6;
    // post : JSON.stringify(post),
    Post("course", post)
      .then((res: any) => {
        console.log("Successfully Add New --Post", res);
        // setPost(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(post);

  // new edit
  const editPost = () => {
    Put(`course/${params.id}`, post)
      .then((res) => {
        setPost({ ...res.data });
        console.log(" Successfully Edit(--put) New Post", { ...res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
      justifyContent="center"
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid
          item
          xs={11}
          sm={6}
          md={4}
          lg={3}
          sx={{ padding: "5px", marginY: "5px" }}
        >
          <Form
            valueName={post.name || ""}
            onChangeName={(e: any) => fillpost( "name", e.target.value )}
            valueEmail={post.shortName || ""}
            onChangeEmail={(e: any) => fillpost( "shortName", e.target.value )}
            valueBody={post.fee || ""}
            onChangeBody={(e:any) => fillpost( "fee" , e.target.value )}
          />
          {params.id ? (
            <Button
              variant="contained"
              onClick={editPost}
              label="Update"
            />
          ) : (
            <Button
              variant="contained"
              onClick={newPost}
              label="Submit"
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
