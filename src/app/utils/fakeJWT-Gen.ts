export function generateFakeJWT(email: string) {

  const header = {
    alg: "HS256",
    typ: "JWT"
  };

  const payload = {
    email: email,
    role: "admin",
    exp: Date.now() + 3600000
  };

  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));

  const signature = "fake-signature"; //esta firma es falsa y usualmente va generada en el backend en entornos reales

  return `${base64Header}.${base64Payload}.${signature}`;
}