using DynastyApp.Core.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Contract.Repository
{
    public interface IAccountRepositoryAsync: IRepositoryAsync<SignupModel>
    {
        Task<IdentityResult> SignupAsyn(SignupModel model);
        Task<SignInResult> SingnIn(LoginModel model);
    }
}
