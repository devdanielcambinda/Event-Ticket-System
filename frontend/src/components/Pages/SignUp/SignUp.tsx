import React, { useEffect } from "react";
//import { useNavigate} from "react-router-dom"

const SignUp: React.FC = () => {
  const getCountries = async () => {
    const countriesJSON = await fetch("https://restcountries.com/v3.1/all");
    const countryObjects = await countriesJSON.json();
    const countries: string[] = [];
    countryObjects.forEach((country: any) => {
        countries.push(country.name.common)
    })
    countries.sort()
    setCountries(countries)
  };

  useEffect(() => {
    getCountries()
  }, []);
  //const navigate = useNavigate();

  const [countries, setCountries] = React.useState<string[]>([]);
  const [nome, setNome] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [zip, setZip] = React.useState<string>("");
  const [country, setCountry] = React.useState<string | null>("");

  const nomeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNome(target.value);
  };

  const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const confirmPasswordChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(target.value);
  };

  const phoneChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(target.value);
  };

  const addressChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(target.value);
  };

  const cityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCity(target.value);
  };

  const zipChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setZip(target.value);
  };

  const countryChangeHandler = ({target} : React.ChangeEvent<HTMLSelectElement>) => {

    if (target.value === "") {
        return setCountry(null);
      }

    setCountry(target.value);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async ({
    preventDefault,
  }: React.FormEvent<HTMLFormElement>) => {
    preventDefault();

    const fd = new FormData();
    fd.append("nome", nome);
  };

  return (
    <div className="container text-center" style={{ maxWidth: 500 }}>
      <form onSubmit={submitHandler}>
        <h2 className="mb-5">Sign up</h2>
        <div className="form-group required mb-4">
          <label htmlFor="nome" className="form-label control-label">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            className="form-control"
            value={nome}
            maxLength={250}
            onChange={nomeChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="email" className="form-label control-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="password" className="form-label control-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            minLength={8}
            className="form-control"
            value={password}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="confirmPassword" className="form-label control-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            minLength={8}
            className="form-control"
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            required
          />
        </div>

        {confirmPassword.length > 0 && password !== confirmPassword && (
          <div className="alert alert-danger">Passwords do not match</div>
        )}

        <div className="form-group required mb-4">
          <label htmlFor="phone" className="form-label control-label">
            Phone number:
          </label>
          <input
            type="text"
            id="phone"
            minLength={9}
            maxLength={9}
            className="form-control"
            value={phone}
            onChange={phoneChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="address" className="form-label control-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            value={address}
            maxLength={250}
            onChange={addressChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="country" className="form-label control-label">
            Country:
          </label>
          <select onChange={countryChangeHandler} id="country" className="form-select" required>
            <option selected value="" disabled>Select a country</option>
            {countries.map((country) => <option key={country} >{country}</option>)}
          </select>
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="city" className="form-label control-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            className="form-control"
            maxLength={250}
            value={city}
            onChange={cityChangeHandler}
            required
          />
        </div>
        <div className="form-group required mb-4">
          <label htmlFor="zip" className="form-label control-label">
            Zip code:
          </label>
          <input
            type="text"
            id="zip"
            maxLength={30}
            className="form-control"
            value={zip}
            onChange={zipChangeHandler}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary mb-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
