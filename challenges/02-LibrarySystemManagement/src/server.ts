import app from "./app";

const PORT: number = 8080;

app.listen(PORT, (): void => {
  console.log(`App listening at ${PORT}`);
});