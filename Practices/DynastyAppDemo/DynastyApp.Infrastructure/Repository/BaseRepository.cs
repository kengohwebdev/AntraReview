using DynastyApp.Core.Contract.Repository;
using DynastyApp.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Repository
{
    public class BaseRepository<T> : IRepositoryAsync<T> where T : class
    {
        private readonly DADbContext db;
        public BaseRepository(DADbContext _dbContext)
        {
            db = _dbContext;
        }

        public async Task<int> DeleteAsync(int id)
        {
            var result = await db.Set<T>().FindAsync(id); //where(x=>x.Id==id).FirstOrDefault()
            db.Set<T>().Remove(result);
            return await db.SaveChangesAsync(); //commit
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await db.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await db.Set<T>().FindAsync(id);
        }

        public async Task<int> InsertAsync(T entity)
        {
            await db.Set<T>().AddAsync(entity);
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateAsync(T entity)
        {
           db.Entry(entity).State = EntityState.Modified;
           return await db.SaveChangesAsync();
        }
    }
}
