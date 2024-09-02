import React, { useState } from 'react';
import { Container, Typography, TextField, Paper, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import anhDaiDien from './anhdaidien.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 600,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  inputField: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [name] = useState('Tô Hữu Trung');
  const [studentId] = useState('B21DCAT194');
  const [github, setGithub] = useState('');
  const [apiDocs, setApiDocs] = useState('');
  const [pdf, setPdf] = useState(''); // Thêm state cho PDF
  const [avatarUrl] = useState(anhDaiDien);

  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          Thông tin cá nhân
        </Typography>
        <Avatar alt="Avatar" src={avatarUrl} className={classes.avatar} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Họ và tên"
              variant="outlined"
              value={name}
              className={classes.inputField}
              disabled
              InputProps={{ style: { fontWeight: 600 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mã sinh viên"
              variant="outlined"
              value={studentId}
              className={classes.inputField}
              disabled
              InputProps={{ style: { fontWeight: 600 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub"
              variant="outlined"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className={classes.inputField}
              placeholder="Nhập liên kết GitHub của bạn"
              InputProps={{ style: { fontWeight: 600 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Swagger/Postman/APIdocs"
              variant="outlined"
              value={apiDocs}
              onChange={(e) => setApiDocs(e.target.value)}
              className={classes.inputField}
              placeholder="Nhập liên kết API Docs của bạn"
              InputProps={{ style: { fontWeight: 600 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="PDF"
              variant="outlined"
              value={pdf}
              onChange={(e) => setPdf(e.target.value)}
              className={classes.inputField}
              placeholder="Nhập liên kết PDF của bạn"
              InputProps={{ style: { fontWeight: 600 } }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Profile;
