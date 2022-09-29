using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Contract.Service;
using DynastyApp.Infrastructure.Data;
using DynastyApp.Infrastructure.Repository;
using DynastyApp.Infrastructure.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSqlServer<DADbContext>(builder.Configuration.GetConnectionString("DADb"));

//dependency injection for repository
builder.Services.AddScoped<IEmployeeRepositoryAsync, EmployeeRepositoryAsync>();
builder.Services.AddScoped<IRegionRepositoryAsync, RegionRepositoryAsync>();

//dependency injection for services
builder.Services.AddScoped<IEmployeeServiceAsync, EmployeeServiceAsync>();
builder.Services.AddScoped<IRegionServiceAsync, RegionServiceAsync>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())  
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
