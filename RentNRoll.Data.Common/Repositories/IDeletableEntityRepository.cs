﻿using RentNRoll.Data.Common.Models;

namespace RentNRoll.Data.Common.Repositories
{
    public interface IDeletableEntityRepository<TEntity> : IRepository<TEntity>
          where TEntity : class, IDeletableEntity
    {
        IQueryable<TEntity> AllWithDeleted();

        IQueryable<TEntity> AllAsNoTrackingWithDeleted();

        void HardDelete(TEntity entity);

        void Undelete(TEntity entity);
    }
}
