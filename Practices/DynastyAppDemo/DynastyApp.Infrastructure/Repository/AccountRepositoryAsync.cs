using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Entity;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Repository
{
    public class AccountRepositoryAsync : BaseRepository<SignupModel>, IAccountRepositoryAsync
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        public AccountRepositoryAsync(DADbContext _dbContext, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) : base(_dbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<IdentityResult> SignupAsyn(SignupModel model)
        {
            ApplicationUser user = new ApplicationUser();
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.Email = model.EmailId;
            user.UserName = model.EmailId;
            return await _userManager.CreateAsync(user,model.Password);
        }

        public async Task<SignInResult> SingnIn(LoginModel login)
        {
            return await _signInManager.PasswordSignInAsync(login.Username,login.Password,false,false);
        }
    }
}
