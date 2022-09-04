import React from "react";
import Box from "../UI/Box";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Column from "../UI/Column";
import Comment from "../UI/Comment";
import FileUpload from "../UI/FileUpload";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import Shaded from "../UI/Shaded";
import Title from "../UI/Title";

const Form1 = () => {
  return (
    <>
      <Box>
        <h2 className="title has-text-centered mt-4 ">HR Requirement</h2>
        <div className="px-5">
          <div className="columns">
            <Column>
              <Input placeholder="Enter Requested Position">
                Requested Position Title
              </Input>
            </Column>

            <Column>
              <Input placeholder="Enter Department Name">Department Name</Input>
            </Column>
          </div>

          <div className="columns">
            <Column>
              <Input placeholder="enter" type="date">
                Requested Date
              </Input>
            </Column>
            <Column>

        {/* ---------------------employment type--------------------- */}

              <div className="field px-5">
                <p className="label">Employment Type</p>
                <div className="columns">
                  <Column>
                    <Radio> Part Time</Radio>
                  </Column>
                  <Column>
                    <Radio> Full Time</Radio>
                  </Column>
                </div>
              </div>
            </Column>
          </div>
        </div>



        <hr></hr>

        {/* ---------------------Requirement Reason--------------------- */}

        <Shaded>
          <Title>Requirement Reason</Title>
          (New or updated job descriptions must be attached/mentioned for all
          positions in Annex I)
        </Shaded>

        <hr></hr>

        {/* -----------------------vacant position---------------------- */}

        <div className="px-5">
          <Checkbox>&nbsp; Vacant Position</Checkbox>
          <div className="columns">
            <Column>
              <Input placeholder="Enter Name of Current vacant Position">
                Name of Current vacant Position
              </Input>
            </Column>

            <Column>
              <Input placeholder="Enter Current pay grade">
                Current pay grade/range
              </Input>
            </Column>
          </div>
          <Input placeholder="Enter Recommended pay grade">
            Recommended pay grade/range{" "}
          </Input>
        </div>

        <hr></hr>

        {/* -----------------New position------------------ */}

        <div className="px-5">
          <Checkbox>
            &nbsp;New position (Already included in Workforce Planning)
          </Checkbox>
          <div className="columns">
            <Column>
              <Input placeholder="Enter Name of New  Position">
                Name of NEW position
              </Input>
            </Column>
            <Column>
              <Input placeholder="Enter  pay grade">
                Budgeted pay grade/rang
              </Input>
            </Column>
          </div>
          <Input placeholder="Enter Recommended pay grade">
            Recommended pay grade/range{" "}
          </Input>
        </div>
        <hr></hr>

        {/*--------------Comments---------------- */}

        <div className="px-5">
          <Checkbox>
            &nbsp;New position (Not included in Workforce Planning)
          </Checkbox>
          <div className="columns">
            <Column>
              <Input placeholder="Enter Name of New Position">
                Name of NEW position
              </Input>
            </Column>

            <Column>
              <Input placeholder="Enter Recommended pay grade">
                Recommended pay grade/range_
              </Input>
            </Column>
          </div>
        </div>
        <hr></hr>

        <Shaded>
          <Title>Position information/justification</Title>
          (Indicate what changes were made to the job description or provide
          justification for the new position.)
        </Shaded>

        <hr></hr>

        <Comment placeholder="Enter Justification here" className="px-5" />

        <hr></hr>

        {/* ------------------Approving Authoritied----------------- */}

        <div className="px-5">
          <Title className="is-underlined">Approving Authorities</Title>
          <div className="columns">
            <Column>
              <Input placeholder="Hiring Manager">Hiring Manager</Input>
            </Column>

            <Column>
              <Input type="date">Date</Input>
            </Column>
          </div>

          <div className="columns">
            <Column>
              <Input placeholder="Head of Department">Head of Department</Input>
            </Column>

            <Column>
              <Input type="date">Date</Input>
            </Column>
          </div>

          <div className="columns">
            <Column>
              <Input placeholder="HR">HR</Input>
            </Column>

            <Column>
              <Input placeholder="enter" type="date">
                Date
              </Input>
            </Column>
          </div>

          <div className="columns">
            <Column>
              <Input placeholder="CEO/CFO">CEO/CFO</Input>
            </Column>

            <Column>
              <Input placeholder="enter" type="date">
                Date
              </Input>
            </Column>
          </div>

          {/* --------------file upload--------------------- */}
          <p className="has-text-centered has-text-weight-bold my-5">
            Annex I (Attach Job Description)
          </p>
          <FileUpload />
          <div className="px-5 has-text-centered">
            <Button className="is-success">Submit</Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Form1;
