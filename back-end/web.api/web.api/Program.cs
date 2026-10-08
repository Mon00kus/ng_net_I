using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//
var allowedOriginsSetting = builder.Configuration.GetValue<string>("AllowedOrigins");
var allowedOrigins = !string.IsNullOrEmpty(allowedOriginsSetting)
    ? allowedOriginsSetting.Split(',')
    : Array.Empty<string>();

//
builder.Services.AddCors(opctions =>
{
    opctions.AddDefaultPolicy(policy =>
     {
         policy.WithOrigins(allowedOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod();
     }
    );
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();