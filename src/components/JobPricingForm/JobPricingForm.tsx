// TODO: WHAT A MESS - NEEDS A REFACTOR
import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { getPriceCats } from '../../api';
import Price from '../../types/IPrice';
import { useJobForm } from '../../views/job/JobFormProvider';
import { StaffPicker } from '../StaffPicker/StaffPicker';

export const JobPricingForm: React.VFC = () => {
  const { job, setJob } = useJobForm();
  const emptyPrice: Price = { description: '', staff: '', price: 0 };

  const [newPrice, setNewPrice] = useState<Price>({
    description: '',
    staff: '',
    price: 0,
  });

  const [priceCategories, setPriceCategories] = useState<string[]>([]);

  useEffect(() => {
    getPriceCats().then((data) =>
      setPriceCategories(data.map((priceCat) => priceCat.description))
    );
  }, []);

  const renderPricingList = () =>
    job.pricing &&
    job.pricing.map((element, index) => (
      <tr key={index}>
        <td>{element.description}</td>
        <td>{element.staff}</td>
        <td className="text-right">${Number(element.price).toFixed(2)}</td>
        <td>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              const newList: Price[] = job.pricing;
              newList.splice(index, 1);
              setJob({ ...job, pricing: newList });
            }}
          >
            <i className="bi-dash-lg text-danger"></i>
          </a>
        </td>
      </tr>
    ));

  const getTotalPrice = () =>
    (job.pricing && job.pricing.reduce((a, b) => a + b.price, 0).toFixed(2)) ||
    Number(0).toFixed(2);

  const hasInitials = !!newPrice.staff;

  const handlePriceUpdate = (e: any) => {
    e.preventDefault();
    if (!hasInitials) return;
    const updatedList = job.pricing || [];
    updatedList.push(newPrice);
    setJob({ ...job, pricing: updatedList });
    setNewPrice(emptyPrice);
  };

  return (
    <Form.Group>
      <Form.Label>Pricing</Form.Label>
      <Table className="bg-white" size="sm">
        <thead>
          <tr>
            <th>Description</th>
            <th>By</th>
            <th className="text-center">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderPricingList()}
          <tr>
            <td>
              <Form.Control
                type="select"
                size="sm"
                value={newPrice.description || ''}
                onChange={(e) =>
                  setNewPrice({ ...newPrice, description: e.target.value })
                }
                list="pricing-list"
              />
              <datalist id="pricing-list">
                {priceCategories.map((category) => (
                  <option key={category} value={category} />
                ))}
              </datalist>
            </td>
            <td width="60">
              <StaffPicker
                value={newPrice.staff || ''}
                onChange={(e) =>
                  setNewPrice({ ...newPrice, staff: e.target.value })
                }
                isInvalid={!hasInitials}
              />
            </td>
            <td width="60">
              <Form.Control
                className="text-right"
                type="text"
                size="sm"
                value={newPrice.price || ''}
                onChange={(e) =>
                  setNewPrice({
                    ...newPrice,
                    price: parseInt(e.target.value),
                  })
                }
                onKeyUp={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    handlePriceUpdate(e);
                  }
                }}
              />
            </td>
            <td>
              <a href="" onClick={handlePriceUpdate}>
                <i
                  className={`bi-plus-lg ${
                    hasInitials ? 'text-success' : 'text-muted'
                  }`}
                ></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td className="text-right">
              <strong>${getTotalPrice()}</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </Form.Group>
  );
};
