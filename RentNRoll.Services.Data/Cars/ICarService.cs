﻿using RentNRoll.Data.Models;
using RentNRoll.Web.DTOs.Car;

namespace RentNRoll.Services.Data.Cars
{
	public interface ICarService
	{
		Task<PagedAndFilteredCarDTO<T>> GetCarsPageAsync<T>(CarQueryModel queryModel);

		Task<CarDetailsDTO> GetCarDetailsAsync(int id);

		int GetCarIdByModel(string model);

		Task MakeCarUnavailableAsync(int id);

		Task CreateCarAsync(CreateCarDTO createCarDTO);

		Task DeleteCarByIdAsync(int id);
	}
}
