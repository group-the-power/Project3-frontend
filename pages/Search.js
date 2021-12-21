import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Brand,
  Nav,
  Image,
  Col,
  InputGroup,
  FormControl,
  Table,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import axios from "axios";

export default function Search() {
  const { state } = useLocation();

  const [SearchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .post("userController/Search", {
        city: state.city,
        subjact: state.subjact,
      })
      .then((res) => {
        if (res.data.length > 0) setSearchData(res.data);
        else setSearchData([]);
        if (res.data !== "User not found") {
        }
      })
      .catch((err) => {});
  }, [state]);

  return SearchData.length > 0 ? (
    <div>
      <Card striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>fullName</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {SearchData.map((item, i) => {
            return (
              <tr key={i}>
                <td> {i + 1}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </Card>
    </div>
  ) : (
    <span className="spanPeople">No People Found</span>
  );
}
