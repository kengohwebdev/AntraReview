using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Repository;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Service
{
    public class AccountServiceAsync : IAccountServiceAsync
    {
        private readonly IAccountRepositoryAsync _accountRepositoryAsync;

        public AccountServiceAsync(IAccountRepositoryAsync accountRepositoryAsync)
        {
            _accountRepositoryAsync = accountRepositoryAsync;

        }
        public async Task<SignInResult> SingnInAsync(LoginModel model)
        {
            return await _accountRepositoryAsync.SingnIn(model);
        }

        public async Task<IdentityResult> SignupAsyn(SignupModel model)
        {
            return await _accountRepositoryAsync.SignupAsyn(model);
        }

     
    }
}
