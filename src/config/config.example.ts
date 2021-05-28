export interface Config {
  mongoDB: {
    connectionURI: string,
  }
}

const config: Config = {
  mongoDB: {
    // Safe to use for demo.
    connectionURI: 'mongodb+srv://dev:M7GQz9X024stz115@cluster0.kejq4.mongodb.net/db?retryWrites=true&w=majority',
  }
}

export default config;