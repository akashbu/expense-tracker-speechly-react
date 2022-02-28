import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';


const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  console.log(chartData)
  
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} height={10} width={10} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;


