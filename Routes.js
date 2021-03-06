'use strict';

var express = require('express');
var Routes =express.Router();
var machineRouter = require('./Machine/Machine.Router');
var patientRouter = require('./Patient/Patient.Router');
var DoctorRouter = require('./Doctor/Doctor.Router');
var MaterialRouter = require('./Materials/Materials.Router');

var NurseRouter = require('./Nurse/Nurse.Router');
var AttendantRouter = require('./Attendant/Attendant.Router');
var testRouter = require('./Tests/Tests.Router');


//sachitha
var UserRouter=require('./Users/User.router');
var PatientRouter=require('./Patients/Patient.router');

var emergencyRoute=require('./EmergencyList/Emergency.route');
var drugRoute=require('./Drugs/Drug.route');
var treatmentRoute=require('./Treatments/Treatment.route');
var billRoute=require('./DischargeBill/Bill.route');

//shihan
var diagnosisRoute = require('./Diagnostics/Diagnostics.router');

Routes.use('/Machines/',machineRouter);
Routes.use('/Patients/',patientRouter);
Routes.use('/Doctors/',DoctorRouter);
Routes.use('/Materials/',MaterialRouter);
Routes.use('/Diagnosis/',diagnosisRoute);

Routes.use('/Nurse/', NurseRouter);
Routes.use('/Attendant/', AttendantRouter);
Routes.use('/Tests/',testRouter);



//sachitha
Routes.use('/UserDetails/',UserRouter);
Routes.use('/PatientDetails/',PatientRouter);

Routes.use('/List/',emergencyRoute);
Routes.use('/Treatments/',treatmentRoute);
Routes.use('/Drugs/',drugRoute);
Routes.use('/Bill/',billRoute);



module.exports = Routes;